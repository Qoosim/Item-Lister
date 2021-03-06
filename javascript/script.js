const body = document.querySelector('body');
console.log(body);
const script = document.querySelector('script');

// Overall container
const overallContainer = document.createElement('div');
overallContainer.className = 'overall';

// Header Section

const header = document.createElement('div');
header.className = 'bg-success text-white p-4 mb-3';
header.id = 'main-header';

const headerContainer = document.createElement('div');
headerContainer.className = 'container';

const row = document.createElement('div');
row.className = 'row';

const firstColumn = document.createElement('div');firstColumn.className = 'col-md-6';

const heading1 = document.createElement('h1');
heading1.className = 'header-title';
heading1.textContent = 'Item Lister';
firstColumn.appendChild(heading1)
row.appendChild(firstColumn);

const secondColumn = document.createElement('div');
secondColumn.className = 'col-md-6 align-self-center';

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.className = 'form-control';
searchInput.id = 'filter';
searchInput.setAttribute('placeholder', 'Search Items...');

secondColumn.appendChild(searchInput);
row.appendChild(secondColumn);

headerContainer.appendChild(row)

header.appendChild(headerContainer);

// Body content

const bodyContainer = document.createElement('div');
bodyContainer.className = 'container';

const card = document.createElement('div');
card.className = 'card card-body';
card.id = 'main';

const h2 = document.createElement('h2');
h2.className = 'title';
h2.textContent = 'Add Items';

const form = document.createElement('form');
form.id = 'addForm';
form.className = 'form-inline mb-3';

const formInput = document.createElement('input');
formInput.setAttribute('type', 'text');
formInput.id = 'item';
formInput.className = 'form-control mr-2'

const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.className = 'btn btn-dark mt-1';
submitBtn.setAttribute('value', 'Submit');

const new_h2 = document.createElement('h2');
new_h2.className = 'title';
new_h2.textContent = 'Items'

const ul = document.createElement('ul');
ul.id = 'items';
ul.className = 'list-group';


form.appendChild(formInput);
form.appendChild(submitBtn);
card.appendChild(h2);
card.appendChild(form);
card.appendChild(new_h2);
card.appendChild(ul);

bodyContainer.appendChild(card);

overallContainer.appendChild(header);
overallContainer.appendChild(bodyContainer);
body.insertBefore(overallContainer, script);


// Logic

submitBtn.addEventListener('click', addItem);
ul.addEventListener('click', removeItem);
searchInput.addEventListener('keyup', filterItem);


function addItem(e) {
    e.preventDefault();
    
    if(formInput.value === '') {
        return;
    } else {
        const textInput = formInput.value;
        formInput.value = '';
        
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `${textInput} <button class="btn btn-danger btn-sm float-end delete">X</button>`;

        ul.appendChild(li);
    }
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        const item = e.target.parentElement;
        ul.removeChild(item);
    }
}

function filterItem(e) {
    const text = e.target.value.toLowerCase();
    // Get list of items
    const items = document.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

