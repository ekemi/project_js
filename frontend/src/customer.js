// class Customer {
//     constructor(dataObject) {
        
//         this.dataObject = dataObject
//         this.URL = ' http://127.0.0.1:3000'
//     }
// }
//categoryFormFields
// id="title"
// const customerFormFields = `<label>Name</label>
// <input type = "text" id="name" required/>`
// console.log(customerFormFields)

// class Customer {
//     constructor(data){
//         name: data.name
//     //     orders: orders.data.sort((a,b)=>{
//     //         if(a.product_name < b.product_name){
//     //             return -1
//     //         }else if (a.product_name > b.product_name){
//     //             return 1
//     //         }else{
//     //             return 0
//     //         }
//     //     })
//      }

//     //newCategoryForm newCustomerForm
//     static newCategoryForm () {

//         let newCategoryFormDiv = document.getElementById('category-form')
//         newCategoryFormDiv.innerHTML = 
//         `<form onsubmit="createCategory(); return false;">`+
//         customerFormFields +
//         `<input class="button" type="submit" value="add new customer"/>
//         </form><br>`
//         return newCategoryFormDiv
        

//     }

//     //editCategoryForm editCustomerForm
//     static editCategoryForm() {
//         let editCategoryFormDiv = document.getElementById('category-form')
//         editCategoryFormDiv.innerHTML = 
//         `<form onsubmit="createCategory(); return false;">`+
//         customerFormFields +
//         `<input class="button" type="submit" value="Update Info"/>
//         </form><br>`
//         return editCategoryFormDiv

//     }

   
    

// }

// function getCustomers() {
//     fetch ("http://127.0.0.1:3000/customers")
//     .then(resp=>resp.json())
//     .then(data=>{
//             renderCategoriesHtml(data)
//             addCategoriesClickListeners()
//             addItemsClickListeners()
//     })
// }
// function createCategory(){
//     const category = {
//         name: document.getElementById('name').value
//     }
//     fetch("http://127.0.0.1:3000/customers", {
//         method: 'POST',
//         body: JSON.stringify(category),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(res=>res.json())
//     .then(category=>{
//         clearCategoriesHtml()
//             getCategories()
//             Customer.newCategoryForm()
//     })
// }

// function updateCategory()(){

// }


// getCustomers()
// p = new Customer ({name:'hello'})
// console.log(Customer.newCustomerForm())
// console.log(Customer.editCustomerForm() )
// class Customer {
//     constructor(data) {
//         this.id = data.id
//         orders: orders.data.sort((a,b)=>{
//                         if(a.product_name < b.product_name){
//                             return -1
//                         }else if (a.product_name > b.product_name){
//                             return 1
//                         }else{
//                             return 0
//                         }
//                     })
//     }

//     // static methods only called on the class itself
//     static newCategoryForm() {
//         let newCategoryFormDiv = document.getElementById('category-form')
//         newCategoryFormDiv.innerHTML = `
//         <form onsubmit="createCategory(); return false;">` +
//             categoryFormFields +
//             `<input class="button" type="submit" value="Add New Category">
//         </form>
//         <br/>`
//     }

//     static editCategoryForm() {
//         let editCategoryFormDiv = document.getElementById('category-form')
//         editCategoryFormDiv.innerHTML = `
//         <form onsubmit="updateCategory(); return false;">` +
//             categoryFormFields +
//             `<input type="submit" value="Update Info">
//         </form>
//         <br/>`
//     }

// }

// function getCategories() {
//     fetch("http://localhost:3000/customers")
//         .then(resp => resp.json())
//         .then(data => {
//             renderCategoriesHtml(data)
//             addCategoriesClickListeners()
//             addItemsClickListeners()
//         })
// }

// function createCategory() {
//     const category = {
//        name: document.getElementById('title').value,
//         // description: document.getElementById('description').value,
//     }

//     fetch("http://localhost:3000/customers", {
//         method: 'POST',
//         body: JSON.stringify(category),
//         // tells the client what vvv the content type of the returned content actually is.
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//         // advertises which content types, expressed as MIME types, the ^^^ client is able to understand.
//     })
//         .then(resp => resp.json() )
//         .then(category => {
//             clearCategoriesHtml()
//             getCategories()
//             Customer.newCategoryForm()
//         });
// }

// // Issue a patch when the edit category form is submitted
// function updateCategory() {
//     let categoryId = this.event.target.categoryId.value

//     const category = {
//         name: document.getElementById('title').value,
//         // description: document.getElementById('description').value,
//     }

//     fetch(`http://localhost:3000/customers/${categoryId}`, {
//         method: 'PATCH',
//         body: JSON.stringify(category),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//         .then(resp => resp.json() )
//         .then(category => {
//             clearCategoriesHtml()
//             getCategories()
//             Customer.newCategoryForm()
//         });
// }

// // Handler to render the edit category form and populate it with current info
// function editCategory() {
//     let categoryId = this.parentElement.getAttribute('data-category-id')

//     // Populate the category form with categories' info
//     fetch(`http://localhost:3000/customers/${categoryId}`)
//         .then(resp => resp.json())
//         .then(data => {
//             Category.editCategoryForm()
//             let categoryForm = document.getElementById('category-form')
//             categoryForm.querySelector('#title').value = data.name
//             // categoryForm.querySelector('#categoryId').value = data.id
//             // categoryForm.querySelector('#description').value = data.description
//         })
// }

// // Handler to delete a category
// function deleteCategory() {
//     let categoryId = this.parentElement.getAttribute('data-category-id')

//     fetch(`http://localhost:3000/customers/${categoryId}`, {
//         method: 'DELETE'
//     })
//         .then(resp => resp.json())
//         .then(json => {
//             let selectedCategory = document.querySelector(`.card[data-category-id="${categoryId}"]`)
//             selectedCategory.remove()
//         })
// }

// function addCategoriesClickListeners() {
//     document.querySelectorAll('.edit-category-button').forEach(element => {
//         element.addEventListener("click", editCategory)
//     })

//     document.querySelectorAll('.delete-category-button').forEach(element => {
//         element.addEventListener("click", deleteCategory)
//     })
// }

// function clearCategoriesHtml() {
//     let categoriesIndex = document.getElementById("categories-list")
//     categoriesIndex.innerHTML = ''
// }

// Customer.prototype.categoryItemsHtml = function () {
//     let categoryItems = this.orders.map(item => {
//         // debugger
//         // let date = parseDate(item.updated_at)

//         return (`
//         <div class="card" data-item-id="${item.id}" >
   
//         <strong>Name: </strong>${item.price} <br/>
//         <strong>Details: </strong>${item.seller} <br/>
//         <strong>Details: </strong>${item.product_name} <br/>
                 
                 
//         <button class="delete-item-button" style="background-color:red">Delete Item</button>  
//         </div>
// 		`)
//     }).join('')

//     return (categoryItems)
// }


// Customer.prototype.categoryHtml = function () {

//     return `<div class="card" data-category-id="${this.id}">
// <!--            </br>-->
//             <strong class="category-title">${this.name}</strong> <br/>
//             <button class="view-items-category-button">View Inventory</button>  
//             <button class="edit-category-button">Edit Info</button>  
//             <button class="delete-category-button">Delete</button>
//             </div>
//         </div>`
// };

// Customer.prototype.addItemButton = function () {

//     let addNewItemButton = document.createElement('button')
//     addNewItemButton.className = 'add-item-button'
//     addNewItemButton.id = this.id
//     addNewItemButton.innerText = "Add Item"

//     return addNewItemButton
// }

// function renderCategoriesHtml(data) {
//     let categoriesIndex = document.getElementById("categories-list")

//     data.forEach((category) => {

//         let itemsIndexHtml = document.createElement('div')
//         itemsIndexHtml.className = 'items'
//         itemsIndexHtml.style.display = 'none'
//         let emptyItemsHtml = itemsIndexHtml

//         let newCategory = new Customer(category)
//         itemsIndexHtml.innerHTML = newCategory.categoryItemsHtml()

//         categoriesIndex.innerHTML += newCategory.categoryHtml()

//         let selectedCategoryHtml = document.querySelector(`.card[data-category-id="${newCategory.id}"]`)
//         selectedCategoryHtml.append(itemsIndexHtml.childElementCount ? itemsIndexHtml : emptyItemsHtml )
//         selectedCategoryHtml.querySelector('.items').appendChild(newCategory.addItemButton())
//     });
// }







