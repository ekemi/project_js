class OrderSerializer

    def initialize(order_object)
        @order = order_object
    end

    def to_serialized_json
        options = {
            include: {
                customer: {
                    only: [:name]
                }
            },     
             except: [:updated_at, :created_at]
        }
        @order.to_json(options)
    end
       
   
end 