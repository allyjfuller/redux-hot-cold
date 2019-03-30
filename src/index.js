import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game/game';
import store from './store';

ReactDOM.render(
	
	<Provider store={store}>
  		<Game />
  	</Provider>,
  
  document.getElementById('root')
);
