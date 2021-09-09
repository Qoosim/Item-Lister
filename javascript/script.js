const body = document.querySelector('body');
console.log(body);
const script = document.querySelector('script');

const headerDiv = document.createElement('div');

const header = document.createElement('div');
header.className = 'bg-success text-white p-4 mb-3';
header.id = 'main-header';

const container = document.createElement('div');
container.className = 'container';

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

container.appendChild(row)

header.appendChild(container);


body.insertBefore(header, script);
