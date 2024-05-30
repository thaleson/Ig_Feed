import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/globalStyles'


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
    
      <GlobalStyle />
      <App />
     
    
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
