class CustomerSerializer 

    def initialize(customer_object)
        @customer = customer_object
    end

    def to_serialized_json
        options = {
            include: {
                orders: {
                    only: [:id, :price, :status, :seller, :product_name, :customer_id]
                }
            },      
             except: [:updated_at, :created_at],
        }
        @customer.to_json(options)
    end
end 