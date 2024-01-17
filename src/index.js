import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1if6bgnrgqahpleb.us.auth0.com"
      clientId="ZMePaFJBb4E6iDw3NrOmpxpE53peSbgm"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);
