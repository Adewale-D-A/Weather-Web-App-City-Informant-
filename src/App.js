import React from "react";
import SearchBar from "./Components/SearchBar";
import cityData from "./cities.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Row, Col } from "react-bootstrap";

import "./App.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Weather Mini App
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="search-component">
        <SearchBar placeholder="Enter a city" data={cityData} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="big-picture-1">
        <div className="big-picture-2">
          <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            className="clickItem"
          >
            Search a city weather
          </Button>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default App;
