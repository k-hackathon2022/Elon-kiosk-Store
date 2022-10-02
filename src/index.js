import React from 'react';
import ReactDOM from 'react-dom/client';
import OrderTable from './components/OrderTable';
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <OrderTable />
  </RecoilRoot>
);

