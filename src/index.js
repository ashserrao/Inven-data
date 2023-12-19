import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
