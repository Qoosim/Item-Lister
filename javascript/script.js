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

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.className = 'form-control';
input.id = 'filter';
input.setAttribute('placeholder', 'Search Items...');

secondColumn.appendChild(input);
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

const formInput1 = document.createElement('input');
formInput1.setAttribute('type', 'text');
formInput1.id = 'item';
formInput1.className = 'form-control mr-2'

const formInput2 = document.createElement('input');
formInput2.setAttribute('type', 'submit');
formInput2.className = 'btn btn-dark';
formInput2.setAttribute('value', 'Submit');

const new_h2 = document.createElement('h2');
new_h2.className = 'title';
new_h2.textContent = 'Items'

const ul = document.createElement('ul');
ul.id = 'items';
ul.className = 'list-group';


form.appendChild(formInput1);
form.appendChild(formInput2);
card.appendChild(h2);
card.appendChild(form);
card.appendChild(new_h2);
card.appendChild(ul);

bodyContainer.appendChild(card);

overallContainer.appendChild(header);
overallContainer.appendChild(bodyContainer);
body.insertBefore(overallContainer, script);



