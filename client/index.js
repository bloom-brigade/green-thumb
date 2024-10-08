import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = createRoot(document.getElementById('contents'));
// root render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
