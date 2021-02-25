class CustomerListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :orders
end
