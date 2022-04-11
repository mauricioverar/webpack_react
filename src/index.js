console.log('desde index.js')

import React from 'react';
import {createRoot}  from 'react-dom/client';
// import App from './App';

const root = createRoot(document.getElementById("root"))

root.render
  (
    <h1>Hola Mundo!</h1>
//     <React.StrictMode>
//     <App />
//   </React.StrictMode>
  )