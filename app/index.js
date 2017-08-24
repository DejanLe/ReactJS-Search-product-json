import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import products from './products';
 

ReactDOM.render(
	<App  products={products} />,
	document.getElementById('app')
	);