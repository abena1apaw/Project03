import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
serviceWorker.unregister();

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root')
);