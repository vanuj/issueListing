import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import store from './store';


const provider = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));