import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = (AppComponent: typeof App) => {
  ReactDOM.render(<AppComponent />, document.getElementById('root'));
};

render(App);
