let items = JSON.parse(localStorage.getItem('items')) || [];

const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

function renderItems() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editItem(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteItem(index);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        itemList.appendChild(li);
    });
}

function addItem() {
    const value = itemInput.value.trim();
    if (value) {
        items.push(value);
        itemInput.value = '';
        saveAndRender();
    }
}

function editItem(index) {
    const newValue = prompt('Edit item:', items[index]);
    if (newValue !== null && newValue.trim() !== '') {
        items[index] = newValue.trim();
        saveAndRender();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('items', JSON.stringify(items));
    renderItems();
}

// Initial render
renderItems();
