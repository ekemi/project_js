// class Order {

//     constructor(id, product_name, seller,price) {
//         this.id = id;
//         this.product_name = product_name;
//         this.seller = seller;
//         this.price = price;

//     }

//     //check validation
//       validation (object) {
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
    // Insert a new order
    
//    insertOrder() {
//         // this.btnCreate = document.getElementById("btn-create");
//         // this.btnCreate = document.getElementById("btn-create")
//         document.getElementById("btn-create").addEventListener("click",console.log("click"));

//         console.log(this.btnCreate)
//     }



    
    
    // getOrder () {
    //input elements
        // const id = document.getElementById('user-id');
        // const proname = document.getElementById('proname');
        // const seller = document.getElementById('seller');
        // const price = document.getElementById('price');
        // //Button  elements
        // const btnCreate = document.getElementById('btn-create');
        // const btnUpdate = document.getElementById('btn-update');
        // const btnDelete = document.getElementById('btn-delete');
        // const btnRead = document.getElementById('btn-read');
//     }

// }

//check validation
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

// new Order(1, "rrr","44",12).insertOrder()

// class Item {
//     constructor(data) {
//         this.id = data.id
//         this.name = data.product_name
//         this.details = data.seller
      
//         this.color = data.customer_id
//     }
// }

// function addItem() {
//     const item = {
        // returns the item attribute elements
//         product_name: document.getElementById('name').value,
//         seller: document.getElementById('quantity').value,
//         price: document.getElementById('color').value,
//         customer_id: document.getElementById('item-categoryId').value
//     }

//     fetch("http://localhost:3000/orders", {
//         method: 'POST',
//         // turns the item attributes given by their elements into json data
//         // and returns a promise
//         body: JSON.stringify(item),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//         // turns the response into a json element
//         .then(resp => resp.json())
//         .then(item => {
//             clearCategoriesHtml()
//             getCategories()
//         });
// }

// function renderItemFormFields(categoryId) {
//     return `<label><strong>Name: </strong></label><br/>
//     <input type="text" id="name" required><br/>
//     <input type="hidden" id="item-categoryId" value="${categoryId}">
//     <label><strong>Quantity: </strong></label><br/>
//     <input type="text" id="quantity" required><br/>
//     <input type="hidden" id="item-categoryId" value="${categoryId}">
//     <label><strong>Color: </strong></label><br/>
//     <input type="text" id="color"><br/>
//     <input type="hidden" id="item-categoryId" value="${categoryId}">
//     <label><strong>Details:   </strong></label><br/>
//     <input type="text" id="item-details"><br/>  
//     <input class="submit-new-item" type="submit" value="Submit">
//     `
// }

// function renderNewItemForm() {
//     let categoryId = this.getAttribute('id')
//     this.style.display = "none"
//     let itemsHtml = this.parentElement
//     let itemForm = document.createElement('form')
//     itemForm.setAttribute("onsubmit", "addItem(); return false;")
//     itemForm.innerHTML = renderItemFormFields(categoryId)
//     itemsHtml.appendChild(itemForm)
// }

// function deleteItem() {
//     let itemId = this.parentElement.getAttribute('data-item-id')

//     fetch(`http://localhost:3000/items/${itemId}`, {
//         method: 'DELETE'
//     })
//         .then(resp => resp.json())
//         .then(json => {
//             let selectedItem = document.querySelector(`.card[data-item-id="${itemId}"]`)
//             selectedItem.remove()
//         })
// }

// function addItemsClickListeners() {
//     document.querySelectorAll('.view-items-category-button').forEach(element => {
//         element.addEventListener('click', viewCategoryItems)
//     })

//     document.querySelectorAll('.add-item-button').forEach(element => {
//         element.addEventListener('click', renderNewItemForm)
//     })

//     document.querySelectorAll('.delete-item-button').forEach(element => {
//         element.addEventListener("click", deleteItem)
//     })
// }

// function viewCategoryItems() {
//     Customer.newCategoryForm()
//     let categorySelectedHtml = this.parentElement.querySelector('.items')
//     toggleHideDisplay(categorySelectedHtml)
// }