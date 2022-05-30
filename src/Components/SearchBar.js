import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function SearchBar({ city, country }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // useState(s) for extracting API info to the user
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [cloud, setCloud] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDegree, setWindDegree] = useState("");
  const [long, setlong] = useState("");
  const [lat, setlat] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [descr, setDescr] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [sunsetTranslate, setSunsetTranslate] = useState(0);

  const WeatherParameters = (city, country) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b47d85ad259f3d7e7e9a8530767ff6e2&units=metric`,
    })
      .then((response) => {
        // console.log(response.data.main.temp);
        setLoading(false);
        setTemperature(response.data.main.temp);
        setCloud(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setWindDegree(response.data.wind.deg);
        setlong(response.data.coord.lon);
        setlat(response.data.coord.lat);
        setSunSet(response.data.sys.sunrise);
        setSunrise(response.data.sys.sunset);
        setDescr(response.data.weather[0].description);
        setTimeZone(response.data.timezone);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.status);
        setError(error.response.status);
      });

    console.log(city, country);
  };
  WeatherParameters(city, country);
  if (error === 0) {
    return (
      <>
        <div className="network-para">
          <h4 class>Please Check Your Internet Connection</h4>{" "}
          <span className="emoji-network">&#128549;</span>
        </div>
      </>
    );
  } else if (error === 404) {
    return (
      <>
        <h4>
          Sorry, the city requested is not available, Please select from the
          dropdown menu &#128148; &#128532;
        </h4>
      </>
    );
  } else if (loading) {
    return (
      <>
        <div className="spinner-centered">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  } else {
    return (
      <div className="search main-data">
        <div className="main-data-header">
          <div>
            <h3>
              You requested for:{" "}
              <span className="city-country">
                {city}, {country} &#9989;
              </span>
            </h3>
          </div>
          <div>
            <div className="margin-sm">
              <span className="main-text-body">
                <b>General Weather Description:</b>{" "}
                <span className="detail">
                  <b>{descr} &#127780;</b>{" "}
                </span>
              </span>
            </div>
            <div className="margin-sm">
              <span className="main-text-body">
                <b>TimeZone:</b>{" "}
                <span className="detail">
                  <b>{timeZone} &#8986;</b>{" "}
                </span>
              </span>
            </div>
            <div className="margin-sm lat-long">
              <div className="lat">
                <span className="main-text-body">
                  <b>longitude:</b> <span className="detail">{long}</span>
                </span>
              </div>
              <div>
                <span className="main-text-body">
                  <b>latitude</b> <span className="detail">{lat}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-data-content-1">
          <div className="section-1-a">
            <div className="margin-sm tem-hum">
              <div className="temp-0">
                <span className="main-text-body">
                  <b>Temperature:</b>{" "}
                  <span className="detail">
                    {temperature} <sup>0</sup> C
                  </span>
                </span>
              </div>
              <div>
                <span className="main-text-body">
                  <b>Humidity:</b> <span className="detail">{humidity}%</span>
                </span>
              </div>
            </div>
            <div className="margin-sm wind-deg">
              <div className="temp-0">
                {" "}
                <span className="main-text-body">
                  <b>Wind Speed:</b>{" "}
                  <span className="detail">{windSpeed}(m/s)</span>
                </span>
              </div>
              <div>
                <span className="main-text-body ">
                  <b>Wind direction: </b>
                  <span className="detail">
                    {windDegree} degrees{" "}
                    <span className="met-dis-no">(meteorological)</span>{" "}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="section-2-a">
            <div className="margin-sm sun-ris-set">
              <div className="sunrise">
                <span className="main-text-body">
                  <b>Sunrise time(UTC):</b>{" "}
                  <span className="detail">{sunrise} &#127774;</span>{" "}
                </span>
              </div>
              <div>
                <span className="main-text-body">
                  <b>Sunset time(UTC):</b>{" "}
                  <span className="detail">{sunSet} &#127749;</span>{" "}
                </span>
              </div>
            </div>
            <div className="margin-sm">
              <span className="main-text-body">
                <b>Cloud:</b> <span className="detail">{cloud}%&#127781;</span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default SearchBar;
