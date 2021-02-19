// The brain of the app

document.addEventListener('DOMContentLoaded', ()=>{
    fecthOrders()
})

const url = "http://127.0.0.1:3000"

    //Read - fetch all the orders
    fecthOrders =()=> {
     fetch ("http://127.0.0.1:3000/orders")
     //Getting an response and added .json() to jsonify
     .then(resp =>resp.json())
     //Resolve the Promise and extra the Data
     .then(orders =>{
         //for..of to iterate over an arrow of objects
         // const order is rails object
         for(const order of orders){
             console.log(order)
             //Create an object order by calling a constructor function
             //orderObject is object in js
             let orderObject = new Order(order.id, order.product_name, order.seller,order.price)
             console.log(orderObject)
             
         }
     })
    }


    //Update an order

    //Create an order

    //Delete an order