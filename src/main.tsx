/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from 'App';
import './index.css';
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Loader from './components/Loader';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
