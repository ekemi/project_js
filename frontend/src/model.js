class Customer {

    static all = [] 
    constructor(id, name ) {
        this.id = id;
        this.name=name;
        this.order = []
        Customer.all.push(this)

    }

//     constructor(attr){
//         // Info from the keys from the JSON API
//        let  jsonKeys = [ "id", "name"]
//        //Create a new order 
//        jsonKeys.forEach(value=>this[value]= attr[value])
//     }

// // //Customer.findById return customer thatmatches the ID
// // // Customer {id: 1, name: "Ziac", element: li, nameLink: a.selectCustomer, editLink: a, …}
// static findById(id){
//     return this.collection.find(customerList => customerList.id==id)

//  }

//  show() {
//     fetch(`http://127.0.0.1:3000/customers/${this.id}`,{
//         method: 'GET',
//         headers:{
//             "Accept": "application/json",
//             "content-Type":"application/json"
//         }
//     })
//     .then(res=>{
//         if (res.ok){
//             return res.json()
//         }else {
//             return res.text().then(error=>Promise.reject(error))
//         }
//     })
//     //data={id, name}
//     .then(({id, taskAttributes})=>{

//         // Order.loadbyList(id,taskAttributes)

//         debugger

//     })

// }

// //  //Fetch the orders
//    static getCustomers() {
//     // Make a fetch to return a promise
//      return fetch("http://127.0.0.1:3000/customers",{
//          headers: {
//              "Accept": "application/json",
//              "Content-Type": "application/json"

//          }
//      })
//      .then(resp=>{
//          if(resp.ok){
//              //return a promise parsed as JSON
//              return resp.json()
//          }else{
//              return resp.text().then(error=> Promise.reject(error))
//          }
//      })
//      .then(customerList=>{
         
//          //Store the customer in the class
//          this.collection = customerList.map(attrs=>new Customer(attrs))
         
        
//          this.renderCustomersList = this.collection.map(attrs=> attrs.render())
//         this.container().append(...this.renderCustomersList)
//          return this.collection
       
       
//      })
//  }
//  static create(){

//      const formData = {
//          name: document.getElementById('input').value
//      }
//       return fetch("http://127.0.0.1:3000/customers",{
//       method: 'POST', 
//      headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         //Converting the object to string
//         body: JSON.stringify({customer: formData})//just have name
//      }).then(resp=>{
//          if(resp.ok){
//              return resp.json()
//          }else{
//              return resp.text().then(error=>Promise.reject(error))
//          }
//      }).then(customerListAtt=>{
//          let customerList = new Customer(customerListAtt)
//          console.log(customerList)
//          this.collection.push(customerList)
//          //Putting in the DOM
//          this.container().appendChild(customerList.render())
//           new FlashMessage({type:'success', message: 'New message added'})
//          return customerList;
//      })
//      .catch(error =>{
//           new FlashMessage({type: 'error', message: error})
//      })
//  }

// // //  <li><a href="#" target="_blank">List</a></li>
// // //  <li><a href="#" target="_blank">List</a></li>
// // //  <li><a href="#" target="_blank">List</a></li>

// static container () {
//    return this.c ||=document.querySelector('#list')
// }



//  render () {
//      this.ul ||= document.createElement('ul')
//      this.element ||=document.createElement('li');
//      //this.element.class ="classe names"
//      this.nameLink ||= document.createElement('a')
//       //this.nameLink.classList.add(..."fas fa-edit btnedit".split(" "))
//       this.nameLink.classList.add('selectCustomer')
//        this.nameLink.textContent= this.name;
//        // add dataset to get the id of the customer
//        this.nameLink.dataset.customerId = this.id
//        this.editLink  ||=  document.createElement('a') 
//        //this.nameLink.class ="classe names"
//        this.editLink.innerHTML = `<i class="fas fa-edit btnedit">`
//        //this.deleteLink.class ="classe names"
//        this.deleteLink ||=  document.createElement('a') 
//        this.deleteLink.innerHTML = `<i class="fas fa-trash-alt btndelete"></i>`
//        this.element.append(this.nameLink,this.editLink,this.deleteLink )
//        this.ul.appendChild(this.element)
//        return this.ul;
//  }

// }




// class Order{

// constructor(attributes){
//     let list = ["id","product_name","seller","price"]
//     list.forEach(attr=>this[attr]=attributes)

// }

// static container() {
//     return this.c=querySelector("#task")
// }
// static loadByList(id , taskAttributes){

//     Order.name_customer_id =id
//     let orders = taskAttributes.map(taskAttribute=> new Order(taskAttribute))
//     let rendered = tasks.map(task=>task.render())
//     this.container(...rendered)
// } 

// }


// class FlashMessage{
//     constructor({type, message}){
//         this.message = message
//         this.color = type=="error" ? 'bg-danger' : 'bg-light'
//         this.render()
//     }
//     static container () {
//         return this.c ||= document.querySelector('#flash')
//     }
//     render() {
//         // debugger
//        this.toggleMessage()
//        setTimeout(this.toggleMessage.bind(this),1000)
//     }

//     toggleMessage() {
//         FlashMessage.container().textContent=this.message
//         FlashMessage.container().classList.toggle(this.color)
//         FlashMessage.container().classList.toggle('opacity')

//     }
}

p = new Customer(1,"papa")

console.log(p)