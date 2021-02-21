document.addEventListener('DOMContentLoaded', ()=>{

   Customer.getOrders()
    
   
})

document.addEventListener('submit', function(e){
   let target = e.target;
   if(target.matches('#customer-list')){
      //check if the form works properly
      e.preventDefault();
      let formData = {}
      target.querySelectorAll('input').forEach(function(input){
      formData[input.name]= input.value;
      console.log(formData)
         
      })
      Customer.create(formData)
   }
})