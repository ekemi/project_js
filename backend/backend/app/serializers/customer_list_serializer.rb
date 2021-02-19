class CustomerListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
end
