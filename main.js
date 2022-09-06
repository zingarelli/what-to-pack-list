const form = document.getElementById('new-item');
const listOfItems = document.getElementById('list');
const backpack = JSON.parse(localStorage.getItem('backpack_items')) || []; //data stored in the browser

//add an item to the list
function addItemInList(item){
    const itemElement = document.createElement('li')
    const itemContent = document.createElement('strong');

    //build the li element
    itemContent.dataset.id = item.id;
    itemContent.innerHTML = item.quantity;
    itemElement.classList.add('item');
    itemElement.appendChild(itemContent);
    itemElement.innerHTML += item.name;

    //add li to the ul element
    listOfItems.appendChild(itemElement);
}

//update the quantity of an item in the list and in the backpack
function changeQuantity(id, quantity){
    //update the list
    document.querySelector(`[data-id='${id}']`).innerHTML = quantity;

    //update the backpack
    backpack[id].quantity = quantity;   
}

//save data in local storage
function persistData(){     
    localStorage.setItem('backpack_items', JSON.stringify(backpack)); //need to convert list (which is an object) to a JSON string
}

//return the item in backpack, if any
function findItem(name){
    return backpack.find(item => item.name === name);
}

/*
    Fill the list of items when the page loads
*/
backpack.forEach((item) => {
    addItemInList(item);
})

/*
    When the user submits the form, an item needs to be added to the list,
    and persisted in local storage.
*/
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements['item-name'];
    const quantity = e.target.elements['item-quantity'];
    const itemInBackpack = findItem(name.value);
    
    //TODO: handle invalid data (blank, injection))

    if(itemInBackpack){
        changeQuantity(itemInBackpack.id, quantity.value);
    }
    else{
        //it's a new item
        const item = {
            'name': name.value, 
            'quantity': quantity.value,
            'id': backpack.length,
        }
        addItemInList(item);
        
        //add item to backpack
        backpack.push(item);
    }
    
    //save data to local storage
    persistData();

    //clear form
    name.value = '';
    quantity.value = '';

    //set focus to the first input in the form
    name.focus();
})