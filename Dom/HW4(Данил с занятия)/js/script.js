let container = document.createElement('div');
let div = document.createElement('div');
let h1 = document.createElement('h1');

document.body.appendChild(container);
container.appendChild(div);
container.appendChild(h1);

container.classList = 'container';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Item {
  constructor(name, price) {
    this.id = Item.id++;
    this.name = name;
    this.price = price;
    this.color = this.getRandomColor()
  }

  static id = 1;

  get fullInfo(){
    return this.name + ' ' + this.price;
  }

  getRandomColor(){
    let result = '#';
    const alphabet = 'abcdef';
    for(let i=0; i < 6; i++){
      const isNumber = getRandomInt(1,6) >= 3;
      result += isNumber ?
      getRandomInt(0,9): 
      alphabet[getRandomInt(0, alphabet.length - 1)];
    } return result.toUpperCase();
  }
}

const itemNames = [ 'Vaz', 'Toyota', 'BMW', 'Audi', 'Mercedes' ];

let cars = itemNames.map(name => {
  const price = Math.ceil(Math.random() * 10000)
  return new Item(name, price)
})

class Cart {
  constructor(){
    this.items = [];
    this.totalPrice = 0;
    this.totalAmmount = 0;
  }

  #calculateTotals(){
    const result = this.items.reduce((acc, item) => {
      return{
        totalPrice: acc.totalPrice + (item.carData.price * item.ammount),
        totalAmmount: acc.totalAmmount + item.ammount,
      }
    },
    {
      totalAmmount: 0,
      totalPrice: 0,
    })
    Object.assign(this, result);
  }

  get fullInfo(){
    return 'Price: ' + this.totalPrice + '; ' + 'Total ammount: ' + this.totalAmmount;
  }

  addItem(car) {
    const carInCart = this.items.find(item => car.id === item.id);
    if(carInCart) {
      carInCart.ammount++;
    } else {
      this.items.push({
        id: car.id,
        carData: car,
        ammount: 1,
      })
    }
    this.#calculateTotals();
  }
}

const cart = new Cart();

cars.forEach(item => {
  const button = document.createElement('button');
  button.innerText = item.fullInfo;
  button.onclick = () => {
    cart.addItem(item);
    h1.innerText = cart.fullInfo;
  }
  div.appendChild(button);
})


// const elemList = [document, document.body, div, sub];

// const isAnalyticEnable = true;

// elemList.forEach(element => {
//   element.addEventListener(
//     'click',
//     (e) => {
//       if(element.tagName === 'DIV' && isAnalyticEnable) {
//         e.stopImmediatePropagation()
//       }

//       console.log(element.tagName)
//     }
//   )

//   element.addEventListener(
//     'click',
//     (e) => {
//       console.log('analytic enabled')
//     }
//   )
// })

// let form = document.createElement('form');
// let inputName = document.createElement('input');
// let inputSurname = document.createElement('input');
// let clear = document.createElement('button');
// let sub = document.createElement('button');
// let checkbox = document.createElement('input');

// inputName.placeholder = 'Name';
// inputSurname.placeholder = 'Surname';
// inputName.name = 'name';
// inputSurname.name = 'surname';
// inputName.type = 'text';
// inputSurname.type = 'text';
// clear.innerText = 'Clear inputs';
// checkbox.type = 'checkbox';
// sub.innerText = 'Submit';

// sub.classList = 'btn btn-primary';

// clear.type = 'button';
// clear.type = 'submit';

// div.appendChild(form);
// form.appendChild(inputName);
// form.appendChild(inputSurname);
// form.appendChild(clear);
// document.body.appendChild(checkbox);
// div.appendChild(sub);

// form.classList = 'input-group';
// inputName.classList = 'form-control';
// inputSurname.classList = 'form-control';
// clear.classList = 'btn btn-danger';

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const { name, surname } = e.target.elements;
//   console.log(e.target.elements);
//   console.log(name.value);
//   console.log(surname.value);
//   console.log('submit1');
//   console.log('------------');
// })

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const { name, surname } = e.target.elements;
//   console.log(name.value);
//   console.log(surname.value);
//   console.log('submit2');
// })