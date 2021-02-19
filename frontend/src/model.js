class Customer {

    constructor(attr){
        // Info from the keys from the JSON API
       let  jsonKeys = [ "id", "name"]
       //Create a new order 
       jsonKeys.forEach(value=>this[value]= attr[value])
    }



 //Fetch the orders
 static getOrders() {
     //Make a fetch to return a promise
     return fetch("http://127.0.0.1:3000/customers",{
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
     .then(customerList=>{
         //Store the customer in the class
         this.collectionCustomers = customerList.map(attrs=>new Customer(attrs))
         this.renderCustomersList = this.collectionCustomers.map(attrs=> attrs.render())
         this.container().append(...this.renderCustomersList)
         return this.collectionCustomers
         debugger
     })
 }

//  <li><a href="#" target="_blank">List</a></li>
//  <li><a href="#" target="_blank">List</a></li>
//  <li><a href="#" target="_blank">List</a></li>

static container () {
   return this.c ||=document.querySelector('#list')
}

 render () {
     this.element ||=document.createElement('li');
     //this.element.class ="classe names"
     this.nameLink ||= document.createElement('a')
      //this.nameLink.classList.add(..."fas fa-edit btnedit".split(" "))
       this.nameLink.textContent= this.name;
       
       this.editLink  ||=  document.createElement('a') 
       //this.nameLink.class ="classe names"
       this.editLink.innerHTML = `<i class="fas fa-edit btnedit">`
       //this.deleteLink.class ="classe names"
       this.deleteLink ||=  document.createElement('a') 
       this.deleteLink.innerHTML = `<i class="fas fa-trash-alt btndelete"></i>`
       this.element.append(this.nameLink,this.editLink,this.deleteLink )
       return this.element;
 }
}