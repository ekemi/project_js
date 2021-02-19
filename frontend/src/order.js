class Order {

    constructor(id, product_name, seller,price) {
        this.id = id;
        this.product_name = product_name;
        this.seller = seller;
        this.price = price;

    }


    
    getOrder () {
    //input elements
        const id = document.getElementById('user-id');
        const proname = document.getElementById('proname');
        const seller = document.getElementById('seller');
        const price = document.getElementById('price');
        //Button  elements
        const btnCreate = document.getElementById('btn-create');
        const btnUpdate = document.getElementById('btn-update');
        const btnDelete = document.getElementById('btn-delete');
        const btnRead = document.getElementById('btn-read');
    }

}

//check validation
const validation = object =>{
    let flag = false;
    for(const value in object){
        if(object[value]!=""&& object.hasOwnProperty(value)){
            flag = true;
        }else {
            flag = false;
        }
    }
    return flag;

}