
// function clearFamilyDD(){
//     document.querySelector("#family-select").innerHTML = ""
// }
// function clearForm() {
//     document.querySelector(".input-text").value = ""
// }

// function clearNewHouseForm() {
//     document.querySelector('.house-hold-input-text').value = ""
//     document.querySelector('.house-members-input-text').value  = ""
// }

function clearOrderDivs(){
    orderCollection.innerHTML = ""
}

// function clearNewChore() {
//     document.querySelector("#select").innerHTML = ""  
// }

// addHouseHoldBtn.addEventListener('click', () => {
//     addHouseHold = !addHouseHold
//     if (addHouseHold){
//         addHouseHoldBtn.textContent = "Close"
//         housePopUp.style.display = 'block'
//         housePopUp.addEventListener('submit', e => {
//             e.preventDefault()
//             HouseHold.postHouseHold(e.target)
//        })
//     } else {
//         addHouseHoldBtn.textContent = "Add a New House Hold"
//         housePopUp.style.display = 'none'
//     }
// })

//2 evenement
// selectHouseHoldBtn.addEventListener('click', () => {
//     selectCustomer = !selectCustomer
//     if(selectCustomer) {
//         selectHouseHoldBtn.textContent= 'Close'
//         selectForm.style.display = 'block'
//         selectForm.addEventListener('submit', e => {
//             e.preventDefault()
//             let customerId = e.target.querySelector('#family-select').value
            
//             let chosenCustomer = Customer.all.find(chosenCustomer => customerId == chosenCustomer.id)
//             clearChoreDivs()
            
//             chosenCustomer.renderOrders()
//         })
//     } else {
//         selectHouseHoldBtn.textContent = "Select Your Family"
//         selectForm.style.display = 'none'
//     }
// })


selectHouseHoldBtn.addEventListener('click', () => {
    selectHouse = !selectHouse
   if(selectHouse) {
       selectHouseHoldBtn.textContent= 'Close'
       selectForm.style.display = 'block'
       selectForm.addEventListener('submit', e => {
           e.preventDefault()
           let customerId = e.target.querySelector('#family-select').value
           
           let chosenCustomer = Customer.all.find(chosenCustomer => customerId == chosenCustomer.id)
           clearOrderDivs()
           
           chosenCustomer.renderChores()
       })
   } else {
       selectHouseHoldBtn.textContent = "Select Your Family"
       selectForm.style.display = 'none'
   }
})

// addBtn.addEventListener('click', () => {

//     //hide and seek feature with add new chore form
//     addChore = !addChore
//     if (addChore) {
//         addBtn.textContent = 'Close'
//         choreForm.style.display = 'block'
//         choreForm.addEventListener('submit', e => {
//             e.preventDefault()
//             Order.postChore(e.target)
//         })
        
        
//     } else {
//         addBtn.textContent = "Add a New Chore!"
//         choreForm.style.display = 'none'
//     }
// })

    
//Beginning***********************************
document.addEventListener("DOMContentLoaded", () => {
    Api.fetchCustomers().then(customers => {
        customers.forEach(customer => {
            let cus = new Customer(customer.name, customer.id)
            customer.orders.forEach(order => {
                //find it to customer class
            cus.addOrder(order)
            })
        })
    Customer.renderCustomers()
    Customer.renderDropDownOptions()
    })
    //I did add the word
    addBtn.textContent = 'Add a New Order'
    // I did add the word
    addHouseHoldBtn.textContent = "Add a New Customer"
    // I did add the word
    selectHouseHoldBtn.textContent = 'Select Your Customer'
    
})



