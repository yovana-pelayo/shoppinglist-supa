export function renderItem(item) {
    const li = document.createElement('li');
    if (item.complete) {
        li.classList.add('complete');
    }
    li.textContent = item.description;
    return li;
}
// created a renderItem function
// this function created a li and adds it to a list class 
// we are adding an item from the text content and inserting that data to our supabase description area. Then we are returning a list on out screen. 

// item passes one list item of our table