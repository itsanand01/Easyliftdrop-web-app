import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="880330137016-15mrvaielau1m1vni4chs7r2kl9evb6m.apps.googleusercontent.com">
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>


);

reportWebVitals();
