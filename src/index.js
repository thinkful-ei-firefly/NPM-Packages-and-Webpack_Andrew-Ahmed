

// import 'normalize.css';
import './index.css';
import $ from 'jquery';

import shoppingList from './shopping-list';
import api from './api';
import store from './store';

// function main() {
//   console.log('DOM is loaded');

//   const startMsg = $('<p>Webpack is working!</p>');
//   $('#root').append(startMsg);
// }

// $(main);

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

// import { privateVar, publicVar } from './fooModule';

// console.log(privateVar);   // undefined
// console.log(publicVar);    // 'This is exposed'

// import fooModule from './fooModule';

// console.log(fooModule.privateVar); // undefined
// console.log(fooModule.publicVar); // 'This is exposed'


