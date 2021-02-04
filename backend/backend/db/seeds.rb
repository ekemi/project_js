# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cus1 = Customer.create(name:"Ziac", username:"ronaldo", email:"ziac@yahoo.com")
ord1 = Order.create(product_name: 'Glasses', seller: "Mr Lee", price: 12.3, customer_id: cus1.id)
