import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
