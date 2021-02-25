class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :price, :seller, :product_name, :customer_id
end
