import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css'

import App from './containers/App';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
