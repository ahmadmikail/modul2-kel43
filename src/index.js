import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardList from "./components/CardList/index";
import Gambar from "./assets/images/gambar1.jpg";
import Quotes from "./components/Quotes"

const quotes = "Disaat payung teduh ku dengar , disitu lah tugas- tugas terbabat abis";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
    name="Praktikan kelompok 43" 
    nim="211201181XXXXX" 
    kelompok="43" 
    isNameBold
    image={Gambar} 
    />
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
