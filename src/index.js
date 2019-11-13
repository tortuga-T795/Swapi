import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getResource = async (url)=>{
    const res = await fetch(url);//будем ждать пока res промисса не будет доступен
    if(!res.ok){
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const body = await res.json();
    return body;
};

getResource('https://swapi.co/api/people/1323434334/')
    .then((body)=>{
        console.log(body);
    })
    .catch((err)=>{
        console.error('Could not fetch', err);
    });

/*fetch('https://swapi.co/api/people/1/')
    .then((res)=>{return res.json();})//получение результата
    .then((body)=>console.log(body));//его тело
*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
