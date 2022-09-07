const form = document.getElementById('new-item');
const listOfItems = document.getElementById('list');
const backpack = JSON.parse(localStorage.getItem('backpack_items')) || []; //data stored in the browser

function addItemInList(item) {
    const itemElement = document.createElement('li')
    const itemContent = document.createElement('strong');

    //build the li element (id + quantity + name + delete button)
    itemContent.dataset.id = item.id;
    itemContent.innerHTML = item.quantity;
    itemElement.classList.add('item');
    itemElement.appendChild(itemContent);
    itemElement.innerHTML += item.name;
    itemElement.appendChild(createDeleteButton(item.id));

    //add li to the ul element
    listOfItems.appendChild(itemElement);
}

//update the quantity of an item in the list and in the backpack
function changeQuantity(id, quantity) {
    //update the list
    document.querySelector(`[data-id='${id}']`).innerHTML = quantity;

    //update the backpack
    const indexInBackpack = backpack.findIndex(item => item.id === id)
    backpack[indexInBackpack].quantity = quantity;
}

function deleteItemInList(item) {
    item.remove();
}

function deleteItemInBackPack(id){
    const indexInBackpack = backpack.findIndex(item => item.id === id)
    backpack.splice(indexInBackpack, 1);
}

//save data in local storage
function persistData() {
    localStorage.setItem('backpack_items', JSON.stringify(backpack)); //need to convert list (which is an object) to a JSON string
}

//create a button that will delete an item when clicked
function createDeleteButton(id) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', (e) => {
        deleteItemInList(e.target.parentNode);
        deleteItemInBackPack(id);
        persistData();
    })
    return deleteButton;
}

//return the item in backpack, if any
function findItemByName(name) {
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
    const itemInBackpack = findItemByName(name.value);

    //TODO: handle invalid data (blank, injection))

    if (itemInBackpack) {
        changeQuantity(itemInBackpack.id, quantity.value);
    }
    else {
        //it's a new item
        const item = {
            'name': name.value,
            'quantity': quantity.value,
            //if backpack is empty, id will be zero; otherwise, we'll increment id 
            //from the id of the last element. This prevents duplicated ids.
            'id': (backpack.length === 0 ? 0 : backpack[backpack.length-1].id + 1),
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