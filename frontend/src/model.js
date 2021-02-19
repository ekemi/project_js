class Order {

    constructor(attr){
        // Info from the keys from the JSON API
       let  jsonKeys = [id,product_name, seller, price]
       //Create a new order 
       jsonKeys.forEach(value=>this[value]= attr[value])
    }
}