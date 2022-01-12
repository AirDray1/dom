function addProduct({name, imgUrl, id, display, storage, faceId, touchId, price, orderInfo:{reviews}, orderInfo:{inStock}}){
  let a = document.createElement('div');
  let b = document.createElement('button');
  b.innerText = 'Buy';
  b.classList = 'btn btn-primary mt-auto';
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

  let count
  a.classList = 'col-4 card product';
  a.innerHTML = `
  <h3 class="card-title">${name}</h3>
  <img src="img/${imgUrl}" alt="${name}" class="card-img-top">
  <span class="card-text">Дисплей (діагональ): ${display}</span>
  <span class="card-text">Обьём памяти: ${storage} ГБ</span>
  <label for="f">Наличие FaceId/TouchId</label>
  <div class="col-2">
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
  <span class="card-text">К-ство на складе: ${inStock}</span>`

  a.append(b)

  let basket = document.querySelector('.basket');
  let currentCount = 1;
  basket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
</svg> Корзина: ${currentCount}`;

  a.addEventListener('click', (e) => { inStock > 0 ? counter() : alert('Данный товар отсутствует на складе')});

  function makeCounter() {
      
    return function() { // (**)
      return alert(currentCount++);
    };
  }
  
  let counter = makeCounter();

  let b_c1 = document.querySelector('.three-cells');
  let b_c2 = document.querySelector('.six-cells');

  function changeToThree() {
    for (i = 0; i < items.length; i++) {
      a.classList.add('col-4');
      a.classList.remove('col-2');
    }
  }

  function changeToSix() {
    for (i = 0; i < items.length; i++) {
      a.classList.remove('col-4');
      a.classList.add('col-2');
    }
  }

  b_c1.addEventListener('click', changeToThree);
  b_c2.addEventListener('click', changeToSix);
  
  document.querySelector('.products').appendChild(a)
}

for (i = 0; i < items.length; i++) {
  addProduct(items[i])
}
