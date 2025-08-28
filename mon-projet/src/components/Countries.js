import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';



const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedRadio, setSelectedRadio] = useState("");
    
    // Le useEffect se joue quand le composant est monté
    useEffect(() => {
       axios
        .get('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,translations,continents')
       .then((response) => {
        setData(response.data);
       }    
         )}, []);
    return (
        <div className="countries">
            <ul className='radio-container'>
            <input type="range" min="1" max="250"  onChange={(e) =>
                {
                    setRangeValue(e.target.value);
                }
            }/> 
            {
                radios.map((continent) => (
                    <li key={continent}>
                        <input type="radio" id={continent} name="continent" value={continent} 
                        checked={continent === selectedRadio} onChange={(e)=>{
                            setSelectedRadio(e.target.value);
                        }}/>
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))
            }   
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
         <h1>Country</h1>
         <ul>
           { 
            data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => (
                <Card  key={index} country={country} /> 
            ))
           }
        </ul>   
        </div>
    );  
};

export default Countries;