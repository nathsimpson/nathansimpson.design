import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
