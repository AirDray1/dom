let div = document.createElement('div')
let form = document.createElement('form')
let myName = document.createElement('input');
let mySurname = document.createElement('input');
let myAge = document.createElement('input');
let sub = document.createElement('button')
let span = document.createElement('span')

myName.type = 'text';
mySurname.type = 'text';
myAge.type = 'number';
myName.name = 'name';
mySurname.name = 'surname';
myAge.name = 'age';
sub.textContent = 'Send form';

myName.classList = 'form-control';
mySurname.classList = 'form-control';
myAge.classList = 'form-control';
sub.classList = 'btn btn-primary';

myName.placeholder = 'Enter your name';
mySurname.placeholder = 'Enter your surname';
myAge.placeholder = 'Enter your age';

myName.addEventListener('keyup', function(){
  this.value = this.value.replace(/[\d]/g, '');
});

mySurname.addEventListener('keyup', function(){
  this.value = this.value.replace(/[\d]/g, '');
});

sub.onclick = function(event){
  event.preventDefault();
  
  if(myAge.value > 80 || myAge.value < 0 || !myAge.value){
    span.innerHTML = `Возраст ${myAge.value} не сильно корректный. Ты либо ещё не родился, либо настольк стар, что оно тебе не надо!)`;
    div.appendChild(span);
  } else{
    span.innerHTML = ``;
    form.action = 'https://www.google.com.ua/';
    form.method = 'GET';
    form.onsubmit();
  }
}

div.appendChild(form);
form.append(myName, mySurname, myAge, sub)
document.body.appendChild(div)

