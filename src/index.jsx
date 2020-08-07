import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App';

import { productMocks, categoryMocks } from './mocks/index';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App productMocks={productMocks} categoryMocks={categoryMocks} />
  </React.StrictMode>,
  document.getElementById('root'),
);
