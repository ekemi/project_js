class OrdersController < ApplicationController

  # GET /orders
  def index
    orders = Order.all

    render json: OrderSerializer.new(orders).to_serialized_json
    
  end

  # GET /orders/1
  def show
    order = Order.find_by(id: params[:id])
    render json:OrderSerializer.new(order).to_serialized_json
   
  
  end

  # POST /orders
  def create
  
    order = Order.new(order_params)
    customers = Customer.all
    order.save
    render json: order

  end

  # PATCH/PUT /orders/1
  def update
   order = Order.find_by(id: params[:id])
    order.update(order_params)
    render json: order


  end

  # DELETE /orders/1
  def destroy
  
        order = Order.find(params[:id])
        order.destroy
        render json: order
  end

  private

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:product_name, :seller, :price, :customer_id)
    end
end
