import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM is used for the DOM websites
// ReactNative is used for mobile phone
import './index.css';
import App from './containers/App';
// if ./App does not has an suffix, then in default it is a 
// JavaScript file
// since 'robots' is not an default export, we need to use 
// curly brackets

import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker is a new feature that allows APPs to
// become faster and potentially work offline

import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
