import { checkAuth, createItem, completeItem, fetchItems, logout } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


// created a function 

//23-25 upon click we are completing the item
async function displayListItems() {
    const listEl = document.getElementById('list-item');
    listEl.textContent = '';

    const items = await fetchItems();
    for (let item of items) {
        const li = renderItem(item);
        li.addEventListener('click', async () => {
            await completeItem(item.id);
            displayListItems();
        });
        listEl.append(li);
    }
}
displayListItems();

const form = document.getElementById('list-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    await createItem(data.get('description'));
    displayListItems();
    form.reset();
});
