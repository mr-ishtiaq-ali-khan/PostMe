import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/reset.scss';
import './assets/styles/main.scss';
import './assets/styles/modal.scss'

/* This code snippet is using ReactDOM's `createRoot` method to create a root for a React application.
The `createRoot` method is used to create a root for a concurrent mode tree. Concurrent mode is a
feature in React that allows for more efficient rendering and better user experience by breaking
down rendering work into smaller chunks. */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
