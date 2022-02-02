import users from './users.js'
// По скольку к массиву users обращаемся через "import" и "export" – работает только с LiveServer;
let container = document.createElement('div');
container.classList = 'container';
let row = document.createElement('div');
row.classList = 'row';

document.body.appendChild(container);
container.appendChild(row);

const createCard = (data) => {
  
  let card = document.createElement('div');
  card.classList = 'card card-body col-6';
  const { city, suite } = data.address;
  
  card.innerHTML = `
    <h5 class="card-title">Пользователь №${data.id}<h5>
    <h1>Name: ${data.name}</h1>
    <a href="mailto: ${data.email}" class="card-link">Email: ${data.email}</a>
    <a href="${data.website}" class="card-link">Website: ${data.website}</a>
    <div class="info">
      <h6>Address: ${city} ${suite}</h6>
    </div>
    <button class="show-info btn btn-primary">Show info</button>
  `
  let button = card.querySelector('.show-info');
  let infoElement = card.querySelector('.info');
  button.addEventListener('click', () => {
    let isShow = infoElement.classList.toggle('show');
    if(isShow) {
      button.innerText = 'Hide info';
    }else {
      button.innerText = 'Show info';
    }
    console.log(data);
  });

  return card
}

const renderCards = (list) => {
  const { body } = document;
  const listOfCard = list.map(item => createCard(item));
  row.append(...listOfCard);
}

renderCards(users);