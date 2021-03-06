class Customer {

    static all = [] 
    constructor(name, id ) {
        this.id = id;
        this.name=name;
        this.orders = []
        Customer.all.push(this)

    }

    addOrder(order){
        let c = new Order(order.product_name, 
            order.seller,
            order.price, 
            order.id)
        this.orders.push(c)
    }

    

    renderOrders() {
        let familySortedChores = this.orders.sort((a,b)=>(a.product_name > b.product_name) ? 1 : -1)
        familySortedChores.forEach(choreObj => {
            choreObj.render()
        })
    }

    static postCustomer(customerdObj) {
        
        let formData = {
            "name": customerdObj.name.value
        }
     
        let configObj = {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }

        return fetch(Api.HOUSE_HOLD_URL, configObj)
            .then(response => response.json())
            .then(customerdObj => {
                let newcusObj = new Customer(customerObj.name, customerdObj.id)
                return newcusObj
            })
            .then(clearNewHouseForm)
            .then(clearFamilyDD)
            .then(clearNewChore)
            .then(Customer.renderDropDownOptions)
            .then(Customer.renderCustomers)

    }
    
    
    static renderDropDownOptions(){
        Customer.all.forEach(customer => {
// console.log(customer )
// debugger
            let option = document.createElement('option')
             option.setAttribute('value', customer.id)
            let customer_name = document.createTextNode(customer.name)
            
            option.appendChild(customer_name)
            selectHouseHold.appendChild(option)
        })
        

    }

    static renderCustomers(){
        Customer.all.forEach(customer => {
            let option = document.createElement("option")
            option.value = customer.id
            option.textContent = customer.name
            select.appendChild(option)
        })
    }

}



class Order {
    static all = []

    constructor(product_name, price , seller,id){
        this.product_name=product_name;
        this.seller=seller;
        this.price =price
        this.id=id;
        Order.all.push(this)

    }
    static postChore(orderData) {

        let formData = {
            "product_name": orderData.product_name.value,
            "seller": orderData.seller.value,
            "price":orderData.price.value,
            'customer_id':orderData.querySelector('select').value
        }
        
    
        let configObj = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        debugger
        return fetch(Api.CHORES_URL, configObj)
            .then(response => response.json())
            .then((choreObj) => {
                let houseHold = Customer.all.find(chosenFamily => choreObj.customer_id == chosenFamily.id)
                let newObj = new Order(choreObj.product_name,choreObj.seller,choreObj.price, choreObj.id)
                houseHold.orders.push(newObj)
                clearOrderDivs()
                houseHold.renderOrders()
    
                clearForm() 
            })
        

    }
    

    

        render() {
            let h6 = document.createElement('h6')
            h6.innerHTML = `<strong>${this.product_name}</strong>`

            let h5 = document.createElement('h5')
            h5.innerHTML = `<strong>${this.seller}</strong>`
            
            let h4 = document.createElement('h4')
            h4.innerHTML = `<strong>${this.price}</strong>`
            
            // let h3 = document.createElement('h3')
            // h3.innerHTML = '<em>Status: </em>'
            // let p = document.createElement('p')
            // p.setAttribute('class', 'chore-status')
            // p.innerHTML = `${this.status}`


            
            // let completeBtn = document.createElement('button')
            // completeBtn.setAttribute('class', 'complete-btn')
            // completeBtn.innerText = 'Complete!'
            // completeBtn.addEventListener('click', event => this.completeChoreHandler(event, this))
            
            // let resetBtn = document.createElement('button')
            // resetBtn.setAttribute('class', 'reset-chore-button')
            // resetBtn.innerText = 'Reset'
            
            // resetBtn.addEventListener('click', event => this.resetHandler(event, this))
            
            // if (p.innerHTML === 'Not delevered'){
            //     p.style.color = 'red'
            //     resetBtn.style.display = 'none'
            // } else {
            //     p.style.color = 'green'
            //     completeBtn.style.display = 'none'
            // }
             
            //Delete order
            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('class', 'delete-chore-btn')
            deleteBtn.innerText = 'Delete'
            deleteBtn.addEventListener('click', event => this.deleteChoreHandler(event, this))

            let divCard = document.createElement('div')
            divCard.setAttribute('class', 'card')
            divCard.setAttribute('id', `${this.id}`)
            //resetBtn //completeBtn
            divCard.append(h6, h5,h4, deleteBtn)
            orderCollection.append(divCard)
        }
    

        static renderOrders(orders) {

            orders.forEach(choreObj => {
                let newObj = new Chore(choreObj.product_name, 
                    choreObj.status, 
                    choreObj.id,
                    choreObj.seller,
                    choreObj.price)
                newObj.render()
            })
        }

        ///when rendering chores 'sort' the chore A-Z


        deleteChoreHandler() {
            event.preventDefault()
            fetch(`${Api.CHORES_URL}/${this.id}`,{
                method: 'DELETE'
            })
            .then(() => { 
                document.getElementById(`${this.id}`).remove()
                Order.all = Order.all.filter(order => order.id !== this.id)
            })
        }



        // completeChoreHandler() {
        //     let cardIns = event.target.parentNode
        //     cardIns.querySelector('.reset-chore-button').style.display = 'block'
        //     event.preventDefault()
        
        //     let toggleResetBtn = event.target.style.display = 'none'
            
        
        //     let statusUpdate = event.target.previousElementSibling
        //     statusUpdate.innerHTML = `Delivered!`
        //     statusUpdate.style.color = 'green'
        
        //     fetch(`${Api.CHORES_URL}/${this.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             'status': statusUpdate.textContent
        //         })
        //     })
        //     .then(parseJSON)
        //     .then(newStatus => {
        //         statusUpdate
        //     })
        // }

        // resetHandler() {
        //     let resetStatus = event.target.previousElementSibling.previousElementSibling
        //     resetStatus.innerHTML = 'Not delevered'
        //     resetStatus.style.color = 'red'
        
        //     let toggleCompleteBtn = event.target.previousElementSibling
        //     toggleCompleteBtn.style.display = 'block'
        
        //     let toggleResetBtn = event.target.style.display = 'none'
        //     event.preventDefault()
        
        //     fetch(`${Api.CHORES_URL}/${this.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             'status': resetStatus.textContent
        //         })
        //     })
        //     .then(parseJSON)
        //     .then(newStatus => {
        //         resetStatus
        //     })
            
        // }


        

        

}



