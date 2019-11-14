import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Components/app/app";


ReactDOM.render(<App />, document.getElementById('root'));

/*
const swapi = new SwapiService();
swapi.getPerson(3).then((p)=> {
    console.log(p.name);
});

getResource('https://swapi.co/api/people/1323434334/')
    .then((body)=>{
        console.log(body);
    })
    .catch((err)=>{
        console.error('Could not fetch', err);
    });

fetch('https://swapi.co/api/people/1/')
    .then((res)=>{return res.json();})//получение результата
    .then((body)=>console.log(body));//его тело
*/
