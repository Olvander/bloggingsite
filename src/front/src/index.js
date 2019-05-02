import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import Homepage from './components/Homepage.js';
import Data from './components/Data.js';

if (document.referrer.match('http://localhost:8080/blog/get/.+')) {
    let backendUrl = "http://localhost:8080/blogs/" + document.referrer.substring(31);
    ReactDOM.render(<App component={<Data backendUrl={backendUrl}/>} />,
        document.getElementById("root"));
} else {
    ReactDOM.render(<App component={<Homepage/>}/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();