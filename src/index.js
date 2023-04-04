import './index.css';
import '@aws-amplify/ui-react/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { NavigationProvider } from './context/navigation';
import { UserInfoProvider } from './context/userInfo';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavigationProvider>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </NavigationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
