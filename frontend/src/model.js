class Order {

    constructor(attr){
        // Info from the keys from the JSON API
       let  jsonKeys = [id,product_name, seller, price]
       //Create a new order 
       jsonKeys.forEach(value=>this[value]= attr[value])
    }



 //Fetch the orders
 static getOrders() {
     //Make a fetch to return a promise
     return fetch("http://127.0.0.1:3000/orders",{
         headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"

         }
     })
     .then(resp=>{
         if(resp.ok){
             //return a promise parsed as JSON
             return resp.json()
         }else{
             return resp.text().then(error=> Promise.reject(error))
         }
     })
     .then(orderList=>{
         debugger
     })
 }
}