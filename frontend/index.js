// The brain of the app

// document.addEventListener('DOMContentLoaded', ()=>{
//     fecthOrders()
//     insertOrder()
    
    
   
// })

// const url = "http://127.0.0.1:3000"

//     //Read - fetch all the orders
//     fecthOrders =()=> {
//      fetch ("http://127.0.0.1:3000/orders")
//      //Getting an response and added .json() to jsonify
//      .then(resp =>resp.json())
//      //Resolve the Promise and extra the Data
//      .then(orders =>{
//          //for..of to iterate over an arrow of objects
//          // const order is rails object
//          for(const order of orders){
//              console.log(order)
//              //Create an object order by calling a constructor function
//              //orderObject is object in js
//              let orderObject = new Order(order.id, order.product_name, order.seller,order.price)
//              console.log(orderObject)
             
//          }
//      })
//     }

//     //check validation
//     // const validation = ()=> {
//     //     const proname = document.getElementById('proname');
//     //     const seller = document.getElementById('seller');
//     //     const price = document.getElementById('price');
//     //     if(proname.value.trim()===""){
//     //         // setErrorMessage(proname,"Need a Product Name")
//     //         console.log('bad')
           
            
//     //     } else if(seller.value.trim()===""){
//     //         console.log("error") 
//     //     }else if (price.value.trim()===""){
//     //         console.log("error")
//     //     }
       

//     // }




//     //check validation
// const validation = object =>{
//     let flag = false;
//     for(const value in object){
//         if(object[value]!=""&& object.hasOwnProperty(value)){
//             flag = true;
//         }else {
//             flag = false;
//         }
//     }
//     return flag;
// }

// // }
//     //Error handling 
//     // input, message
//     // const setErrorMessage = (input, message) =>{
//     //     const control = input.parentElement;
//     //     const small = control.querySelector('small')
     
//     //     // const small = control.querySelector('small')
//     //     // //Add a message
//     //      small.innerHTML = message
//     //       console.log(small)
//     //     // //Add the class success
//     //     control.className = "control success"
        

//     // }

//         // const proname = document.getElementById('proname');
//         // const seller = document.getElementById('seller');
//         // const price = document.getElementById('price');
//     const insertOrder=()=> {
//         const proname = document.getElementById('proname');
//         const seller = document.getElementById('seller');
//         const price = document.getElementById('price');
//          btnCreate = document.getElementById("btn-create");
// console.log(proname)
//         // this.btnCreate = document.getElementById("btn-create")
//         // btnCreate.addEventListener('click',validation({
//         //     productName:proname.value,
//         //     seller:seller.value,
//         //     price:price.value
//         // }));

//     }



//     //Update an order

//     //Create an order


//     //Delete an order