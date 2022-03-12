// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

// let formCreate = document.createElement('form');
// let inputName = document.createElement('input');
// inputName.setAttribute('type', 'text');
// inputName.setAttribute('name', 'name');
//
// let inputAge = document.createElement('input');
// inputAge.setAttribute('type', 'number');
// inputAge.setAttribute('name', 'age');
//
// let button = document.createElement('button');
// button.setAttribute('type', 'submit')
// button.innerText = 'submit';
//
//
// formCreate.append(inputName, inputAge, button);
// document.body.appendChild(formCreate);
//
// let form = document.forms[0];
//
// form.onsubmit = function (e){
//     e.preventDefault();
//     let user = {name: inputName.value, age:inputAge.value};
//     localStorage.setItem('user', JSON.stringify(user));
// };

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let formCreate = document.createElement('form');
// let inputModel = document.createElement('input');
// inputModel.setAttribute('type', 'text');
// inputModel.setAttribute('name', 'model');
//
// let inputType = document.createElement('input');
// inputType.setAttribute('type', 'text');
// inputType.setAttribute('name', 'type');
//
// let inputVolume = document.createElement('input');
// inputVolume.setAttribute('type', 'text');
// inputVolume.setAttribute('name', 'volume');
//
// let button = document.createElement('button');
// button.setAttribute('type', 'submit')
// button.innerText = 'submit';
//
//
// formCreate.append(inputModel, inputType, inputVolume, button);
// document.body.appendChild(formCreate);
//
// let form = document.forms[0];
//
// let arr = [];
// form.onsubmit = function (e){
//     e.preventDefault();
//     let car = {model: inputModel.value, type:inputType.value, volume:inputVolume.value};
//     arr.push(car);
//     localStorage.setItem('cars', JSON.stringify(arr));
// };