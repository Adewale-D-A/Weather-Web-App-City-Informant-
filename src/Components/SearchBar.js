import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';


function SearchBar({ placeholder, data }) {

  const [filterData, setFilterData] = useState([]);
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [cloud, setCloud] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const handleFilter = (e) =>  {
    const searchWord = e.target.value;
    setEnteredCity(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([])
    }  else {
      setFilterData(newFilter);
    }
  }

  const accessValue = (city, country) => {
    setEnteredCity(city);
    setEnteredCountry(country); 
    setFilterData([]);
  };


  const weatherParameters = (city, country) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b47d85ad259f3d7e7e9a8530767ff6e2`,
    })
      .then((response) => {
        console.log(response.data.main.temp); 

        setTemperature(response.data.main.temp);
        setCloud(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (  
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={enteredCity} onChange={handleFilter}/>
        <div className="searchIcon" >
            <SearchIcon onclick={weatherParameters(enteredCity, enteredCountry)}/>
        </div>
      </div>
        {filterData.length !== 0 && (
          <div className="dataResult">
            {filterData.slice(0,15).map((value, key) => {
                return (
                    <div key={value.lat}className="dataItem" onClick={() => accessValue(value.name, value.country)}>
                      <p>{value.name}, {value.country}</p>
                    </div>
                );
            })}
          </div>
        )}
                  <div>
                    <h3>You requested for: {enteredCity},{enteredCountry}</h3>
                    <p>Temperature: {temperature} (Kelvin)</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind Speed: {windSpeed}(m/s)</p>
                    <p>Cloud: {cloud} %cloudiness</p>
                  </div>
      
    </div>

  )
      
}

export default SearchBar;
