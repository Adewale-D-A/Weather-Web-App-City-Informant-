import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import data from "./cities.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

import "./App.css";

const MyVerticallyCenteredModal = (props, cityState, countryState) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          KNOW YOUR CITY &#128512;
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="search-component">
        <SearchBar city={props.cityState} country={props.countryState} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const [enteredCity, setEnteredCity] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [enteredCountry, setEnteredCountry] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setEnteredCity(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
    // console.log(`handlefilter's ${enteredCity} and ${enteredCountry}`);
  };

  const accessValue = (city, country) => {
    setEnteredCity(city);
    setEnteredCountry(country);
    setFilterData([]);
    // console.log(city, country);
  };

  const showModalContents = () => {
    setModalShow(true);
    // alert("Sup baby!");
  };
  return (
    <>
      <div className="big-picture-1">
        <div className="big-picture-2">
          <div>
            <div className="searchInputs">
              <input
                className="input-0"
                type="text"
                placeholder="Search your city &#127757; &#128527;"
                value={enteredCity}
                onChange={handleFilter}
              />
              <Button
                variant="primary"
                onClick={() => showModalContents()}
                className="clickItem"
              >
                &#128269;
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                cityState={enteredCity}
                countryState={enteredCountry}
              />
              {/* <div className="searchIcon">
                <SearchIcon
                  onclick={weatherParameters(enteredCity, enteredCountry)}
                />
              </div> */}
            </div>
            {filterData.length !== 0 && (
              <div className="dataResult">
                {filterData.slice(0, 15).map((value, key) => {
                  return (
                    <div
                      key={value.lat}
                      className="dataItem"
                      onClick={() => accessValue(value.name, value.country)}
                    >
                      <p>
                        {value.name}, {value.country}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
