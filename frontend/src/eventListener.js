document.addEventListener('DOMContentLoaded', ()=>{
   
    Customer.getCustomers()
    

    
   
})

document.addEventListener('click', function(event){
   let target = event.target;
   //To acces the data attribute dataset
   if(target.matches('.selectCustomer')){
      let customerList = Customer.findById(target.dataset.customerId)
     
      customerList.show()
   }
})

document.addEventListener('submit', function(e){
   let target = e.target;
   if(target.matches('#customer-lists')){
      //check if the form works properly
      e.preventDefault();
      let formData = {}
      target.querySelectorAll('input').forEach(function(input){
      formData[input.name]= input.value;
     
         
      })
       Customer.create(formData)
     
   }
})