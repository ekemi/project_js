class CustomersController < ApplicationController

  # GET /customers
  def index
    customers = Customer.all

    render json: CustomerSerializer.new(customers).to_serialized_json
  end

  # GET /customers/1
  def show
  # byebug
  customer = Customer.find_by(params[:id])
  render json: CustomerSerializer.new(customer).to_serialized_json
  end
  # POST /customers
  def create
    customer = Customer.new(customer_params)
        
    customer.save 
    render json: customer
  end

  # PATCH/PUT /customers/1
  # def update
  #   if @customer.update(customer_params)
  #     render json: @customer
  #   else
  #     render json: @customer.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /customers/1
  # def destroy
  #   @customer.destroy
  # end

  private


    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:name)
      # , :username, :email)
    end
end
