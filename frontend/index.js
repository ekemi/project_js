
//2ieme
function clearFamilyDD(){
    document.querySelector("#family-select").innerHTML = ""
}
function clearForm() {
    document.querySelector(".input-text").value = ""
    document.querySelector(".input-text").value = ""
    document.querySelector(".input-text").value = ""
}
// 2ieme
function clearNewHouseForm() {
    document.querySelector('.house-hold-input-text').value = ""
    // document.querySelector('.house-members-input-text').value  = ""
}

function clearOrderDivs(){
    orderCollection.innerHTML = ""
}

function clearNewChore() {
    document.querySelector("#select").innerHTML = ""  
}

//2ieme
addHouseHoldBtn.addEventListener('click', () => {
    addCustomer =!addCustomer
    if (addCustomer){
        addHouseHoldBtn.textContent = "Close"
        housePopUp.style.display = 'block'
        housePopUp.addEventListener('submit', e => {
            e.preventDefault()
            Customer.postCustomer(e.target)
       })
    } else {
        addHouseHoldBtn.textContent ="Add a New Customer!"
        housePopUp.style.display ='none'
    }
})

//2 evenement
 selectHouseHoldBtn.addEventListener('click', () => {
     selectCustomer = !selectCustomer
     if(selectCustomer) {
         selectHouseHoldBtn.textContent= 'Close'
         selectForm.style.display = 'block'
         selectForm.addEventListener('submit', e => {
             e.preventDefault()
             let customerId = e.target.querySelector('#family-select').value
            
             let chosenCustomer = Customer.all.find(chosenCustomer => customerId == chosenCustomer.id)
            clearOrderDivs()
            
             chosenCustomer.renderOrders()
         })
     } else { 
         selectHouseHoldBtn.textContent = "Select Your Customer"
         selectForm.style.display = 'none'
     }
 }) 



//3ieme
addBtn.addEventListener('click', () => {

    //hide and seek feature with add new chore form
    addChore = !addChore
    if (addChore) {
        addBtn.textContent = 'Close'
        choreForm.style.display = 'block'
        choreForm.addEventListener('submit', e => {
            e.preventDefault()
            Order.postChore(e.target)
        })
        
        
    } else {
        addBtn.textContent = "Add a New Chore!"
        choreForm.style.display = 'none'
    }
})

    
//Beginning***********************************
document.addEventListener("DOMContentLoaded", () => {
    Api.fetchCustomers().then(customers => {
        customers.forEach(customer => {
           // console.log(customers)
            let cus = new Customer(customer.name, customer.id)
            customer.orders.forEach(order => {
                console.log(customer.orders)
                //find it to customer class
            cus.addOrder(order)
            })
        })
    Customer.renderCustomers()
    // Top dropdown
     Customer.renderDropDownOptions()
    })
    //I did add the word
    addBtn.textContent = 'Add a New Order'
    // addBtn.onclick('click',)
    // I did add the word
    addHouseHoldBtn.textContent = "Add a New Customer"
    // I did add the word
    selectHouseHoldBtn.textContent = 'Select Your Customer'
    
})



