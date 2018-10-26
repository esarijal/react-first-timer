import React from 'react';
import Game from './Game'
import LoginControl from './LoginControl'
import ReactDOM from 'react-dom';
import Calculator from './Calculator'
import FilterableProductTable from './searchbox/SearchBox'

// ========================================

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
