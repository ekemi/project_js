class OrderListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id,:product_name, :seller, :price
  belongs_to :customer
end
