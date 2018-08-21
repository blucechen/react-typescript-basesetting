import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import themeReducer from './redux/reducer'
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(themeReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
