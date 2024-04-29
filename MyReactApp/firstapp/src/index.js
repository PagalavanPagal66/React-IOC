import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
);


// const nl = [1,2,3,"hi","hello"]
// const rl = nl.map( (listvalues) => {return <li>{listvalues}</li>});

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <ul>
//         {rl}
//     </ul>
// );

