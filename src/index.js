import './index.css';
import '@aws-amplify/ui-react/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Provider } from 'react-redux';
import { NavigationProvider } from './context/navigation';
import { store } from './redux/store/store';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
    <Provider store={store}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Provider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
