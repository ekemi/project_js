class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :update, :destroy]

  # GET /customers
  def index
    @customers = Customer.all

    render json: CustomerListSerializer.new(@customers).serializable_hash[:data].map{|hash| hash[:attributes].map{|has| hash[:attributes]}}
  end

  # GET /customers/1
  def show
  # byebug
    render json: {
      id: params[:id],
      taskAttrributes: CustomerOrderSerializer.new(@customer,include: [:orders]).serializable_hash[:included]}
  end

  # POST /customers
  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render json: @customer, status: :created, location: @customer
    else
      # if the name is empty display the full message
      render json: @customer.errors.full_messages.to_sentence, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /customers/1
  def update
    if @customer.update(customer_params)
      render json: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /customers/1
  def destroy
    @customer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:name)
      # , :username, :email)
    end
end
