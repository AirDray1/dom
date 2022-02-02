let container = document.createElement('div');
container.classList = 'container';
let row = document.createElement('div');
row.classList = 'row';
document.body.appendChild(container);
container.appendChild(row);

let products = document.createElement('div');
products.classList = 'col-10 row products';
let left_sidebar = document.createElement('div');
left_sidebar.classList = 'col-2';

row.appendChild(products);
row.appendChild(left_sidebar);



let currentCount = [];

function addProduct({name, imgUrl, id, display, storage, faceId, touchId, price, orderInfo:{reviews}, orderInfo:{inStock}}){
  let div = document.createElement('div');
  div.classList = 'col-4 card product';
  let sub = document.createElement('button');
  sub.innerText = 'Buy';
  sub.classList = 'btn btn-primary mt-auto';
  const ratings = document.querySelectorAll('.rating');

  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating  = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating_set')){
        setRating(rating)
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating_active');
      ratingValue = rating.querySelector('.rating_value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML){
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating_item');
    }

    function setRating(rating) {
      const ratingItems = document.querySelectorAll('.rating_item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function(e){
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function(e){
          setRatingActiveWidth();
        });
      }
    }
  }

  div.innerHTML = `
  <h3 class="card-title">${name}</h3>
  <img src="img/${imgUrl}" alt="${name}" class="card-img-top">
  <span class="card-text">Дисплей (діагональ): ${display}</span>
  <span class="card-text">Обьём памяти: ${storage} ГБ</span>
  <label for="f">Наличие FaceId/TouchId</label>
  <div class="col-2 ">
      <input type="checkbox" ${ faceId ? "checked" : ""} disabled value="f">
      <input type="checkbox" ${ touchId ? "checked" : ""} disabled value="f">
  </div>
  <div class="form_item">
      <div class="form_label">Рейтинг:</div>
      <div class="rating rating_set">
          <div class="rating_body">
              <div class="rating_active"></div>
              <div class="rating_items">
                  <input type="radio" class="rating_item" value="1" name="rating">
                  <input type="radio" class="rating_item" value="2" name="rating">
                  <input type="radio" class="rating_item" value="3" name="rating">
                  <input type="radio" class="rating_item" value="4" name="rating">
                  <input type="radio" class="rating_item" value="5" name="rating">
              </div>
          </div>
          <div class="rating_value">${reviews * 0.05}</div>
        </div>
  </div>
  <span class="card-text">Цена: ${price}$</span>
  <span class="card-text in-stock">К-ство на складе: ${inStock}</span>`;

  div.appendChild(sub);

  sub.addEventListener('click', (e) => { inStock > 0 ? counter() : alert('Данный товар отсутствует на складе')});

  let basket = document.querySelector('.basket');
  basket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
  </svg> Корзина: ${currentCount}`;
  function makeCounter() {
    return function() {
      currentCount.push({name, imgUrl, id, display, storage, faceId, touchId, price, orderInfo:{reviews}, orderInfo:{inStock}});
      console.log(currentCount);
      basket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
              </svg> Корзина: ${currentCount.length}`;
      let totalPrice = currentCount.reduce((acc, item) => acc + item.price, 0);
      console.log(totalPrice);
      let total_Price = document.querySelector('.total_Price');
      total_Price.innerHTML = `Итоговая цена: ${totalPrice}`;
    };
  };

  basket.addEventListener('click', () => {
    let products = document.querySelector('.products');
    products.innerHTML = ``;
    currentCount.map(createBascketForm);
    basket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
              </svg> Корзина: ${currentCount.length}`;
  })
  
  let counter = makeCounter();

  let b_c1 = document.querySelector('.three-cells');
  let b_c2 = document.querySelector('.six-cells');

  function changeToThree() {
      div.classList.add('col-4');
      div.classList.remove('col-2');
  }

  function changeToSix() {
      div.classList.remove('col-4');
      div.classList.add('col-2');
  }

  b_c1.addEventListener('click', changeToThree);
  b_c2.addEventListener('click', changeToSix);

  products.appendChild(div);
}



function createBascketForm({name, imgUrl, id, display, storage, faceId, touchId, price, orderInfo:{reviews}, orderInfo:{inStock}}){
  let products = document.querySelector('.products');
  let div = document.createElement('div');
  div.classList = 'col-12 card product';
  let row = document.createElement('div');
  div.classList = 'row';
  let del = document.createElement('button');
  del.innerText = 'Del';
  del.classList = 'btn btn-danger mt-auto';
  const ratings = document.querySelectorAll('.rating');

  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating  = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating_set')){
        setRating(rating)
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating_active');
      ratingValue = rating.querySelector('.rating_value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML){
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating_item');
    }

    function setRating(rating) {
      const ratingItems = document.querySelectorAll('.rating_item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function(e){
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function(e){
          setRatingActiveWidth();
        });
      }
    }
  }  
  
  div.innerHTML = `
  <div class="name col-2">
    <h3 class="card-title">${name}</h3>
</div>
<div class="name col-2">
    <img src="img/${imgUrl}" alt="${name}" class="card-img-top">
</div>
<div class="name col-4">
    <span class="card-text">Дисплей (діагональ): ${display}</span>
  <span class="card-text">Обьём памяти: ${storage} ГБ</span>
  <label for="f">Наличие FaceId/TouchId</label>
  <div class="col-2 ">
      <input type="checkbox" ${ faceId ? "checked" : ""} disabled value="f">
      <input type="checkbox" ${ touchId ? "checked" : ""} disabled value="f">
  </div>
  <span class="card-text in-stock">К-ство на складе: ${inStock}</span>
</div>
<div class="name col-2">
    <div class="form_item">
        <div class="form_label">Рейтинг:</div>
        <div class="rating rating_set">
            <div class="rating_body">
                <div class="rating_active"></div>
                <div class="rating_items">
                    <input type="radio" class="rating_item" value="1" name="rating">
                    <input type="radio" class="rating_item" value="2" name="rating">
                    <input type="radio" class="rating_item" value="3" name="rating">
                    <input type="radio" class="rating_item" value="4" name="rating">
                    <input type="radio" class="rating_item" value="5" name="rating">
                </div>
            </div>
            <div class="rating_value">${reviews * 0.05}</div>
          </div>
    </div>
</div>
<div class="name col-2">
    <span class="card-text">Цена: ${price}$</span>
    <div class="del-btn col-12 p-1"></div>
</div>`;

  

  div.appendChild(del);

  del.addEventListener('click', (e) => { inStock > 0 ? delt() : alert('Данный товар отсутствует на складе')});

  function deleteProduct() {
    return function() {
      let index = currentCount.findIndex(n => n.id === id);
      if (index !== -1) {
        currentCount.splice(index, 1);
      };
      let newCurrentCount = currentCount.filter(n => n.id !== id);
      let products = document.querySelector('.products');
      let basket = document.querySelector('.basket');
      products.innerHTML = ``;
      basket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
              </svg> Корзина: ${newCurrentCount.length}`;
      let totalPrice = currentCount.reduce((acc, item) => acc + item.price, 0);
      let total_Price = document.querySelector('.total_Price');
      total_Price.innerHTML = `Итоговая цена: ${totalPrice}`;
      newCurrentCount.map(createBascketForm);

    };
  };
  
  let delt = deleteProduct();

  products.appendChild(row);
  row.appendChild(div);
} 

left_sidebar.innerHTML = `
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light sticky-top" style="width: 280px;">
  <a href="*" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
  <span class="fs-4">Меню</span>
  </a>
  <hr>
  <div class="nav nav-pills flex-column mb-auto form-row text-center gy-3">
    <div class="nav-item col-12 p-1 search">
        
    </div>
    <div class="nav-item col-12 p-1 filter">

    </div>
    <div class="nav-item col-12 p-1">
        <div class="btn-group" role="group" aria-label="Basic">
            <button type="button" class="btn btn-primary three-cells">3 ячейки</button>
            <button type="button" class="btn btn-primary six-cells">6 ячейки</button>
        </div>
    </div>
    <div class="nav-item col-12 p-1">
      <div class="btn-group" role="group" aria-label="Basic">
          <button type="button" class="btn btn-primary basket"></button>
      </div>
      <div class="btn-group" role="group" aria-label="Basic">
          <span class="total_Price"></span>
      </div>
    </div> 
    <div class="nav-item col-12 p-1">
        <div class="btn-group" role="group" aria-label="Basic">
          <div class="btn-group buy" role="group" aria-label="Basic"></div>
        </div>
    </div>                         
  </div>
  <hr>
  <div class="dropdown">
  <a href="https://github.com/AirDray1" class="d-flex align-items-center link-dark text-decoration-none" aria-expanded="false">
      <img src="https://avatars.githubusercontent.com/u/72506143?s=40&v=4" alt="" width="32" height="32" class="rounded-circle me-2">
      <strong>Airdray</strong>
  </a>                    
  </div>
  </div>`;

let buy = document.createElement('div');
buy.innerText = 'Купить';
buy.classList = 'btn btn-primary';
document.querySelector('.buy').appendChild(buy);

buy.addEventListener('click',() => {
  let products = document.querySelector('.products');
  currentCount = [];
  totalPrice = 0;
  total_Price = document.querySelector('.total_Price');
  total_Price.innerHTML = `Итоговая цена: ${totalPrice}`;
  products.innerHTML = `
    <h1>Спасибо за покупку</h1>
    <div class="come-back"></div>
  `;
  let comeBack = document.createElement('div');
  comeBack.innerText = 'Вернуться к покупкам';
  comeBack.classList = 'btn btn-primary';
  document.querySelector('.come-back').appendChild(comeBack);
  comeBack.addEventListener('click',() => {
    let products = document.querySelector('.products');
    products.innerHTML = ``;
    items.map(addProduct)
  })
  
})
  

function filterInput() {
    let div = document.createElement('div');
    let buttonSelect = document.createElement('button');
    let buttonReset = document.createElement('button');
  
    buttonSelect.classList = 'btn btn-primary mt-auto';  
    buttonReset.classList = 'btn btn-primary mt-auto';  
    div.classList = 'row center-block';
    
    buttonSelect.innerText = 'Выбрать';
    buttonReset.innerText = 'Сбросить';
    div.innerHTML = `
    <label class="customlbl">Фильтр цены:</label>
    <div class="col-md-6 p-2">
      <input type="text" class="form-control minNum">
    </div>
    <div class="col-md-6 p-2">
      <input type="text" class="form-control maxNum">
    </div>`;
  
    div.append(buttonSelect);
    div.append(buttonReset);
    buttonSelect.addEventListener('click', filter, false);
    buttonReset.addEventListener('click', reset, false);
    document.querySelector('.filter').appendChild(div);
  
    let min = document.querySelector(".minNum");
    let max = document.querySelector(".maxNum");
  
    function filter(){  
      let minval = min.value;
      let maxval = max.value;
      let products = document.querySelector('.products');
      products.innerHTML = ``;
      let filter = items.filter(function(product) {
        return product.price > minval && product.price < maxval;
      });
      filter.map(addProduct);
    }
  
    function reset(){  
      let products = document.querySelector('.products');
      products.innerHTML = ``;
      document.querySelector(".minNum").value = "";
      document.querySelector(".maxNum").value = "";
      document.querySelector(".searchInput").value = "";
      currentCount = [];
      count = 0
      items.map(addProduct)
    }
}
  
function searchInput() {
  let div = document.createElement('div');
  let buttonSearch = document.createElement('button');

  buttonSearch.classList = 'btn btn-primary';  
  div.classList = 'row center-block';
  
  buttonSearch.innerText = 'Найти';
  div.innerHTML = `
  <label class="customlbl">Поиск товара:</label>
  <div class="col-md-12 p-2">
    <input type="text" class="form-control searchInput">
  </div>
  `;

  div.append(buttonSearch);
  buttonSearch.addEventListener('click',search ,false);
  document.querySelector('.search').appendChild(div);

  let request = document.querySelector(".searchInput");

  function search(){  
    let searchProduct = request.value;
    let products = document.querySelector('.products');
    products.innerHTML = ``;
    let search = items.filter(function(product) {
        return product.name == searchProduct;
    });
    console.log(search);
    
    search.map(addProduct);
  }
}

items.map(addProduct)

searchInput()

filterInput()
