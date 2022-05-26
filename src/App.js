import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import cityData from "./cities.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Container, Row, Col, Card} from 'react-bootstrap';

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
                 <SearchBar placeholder="Enter a city" data={cityData}/>
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
      <Container className="container-layout">
      <Row className="row1">
        <Col className="home-info">HOME</Col>
        <Col className="experience-info">EXPERIENCE</Col>
        <Col className="private-Holiday">PRIVATE HOLIDAYS</Col>
        <Col className="history-info">HISTORY</Col>
        <Col className="contact-info">CONTACT</Col>
      </Row>
      <Row>
        <Col className="big-picture-1">
            <div className="inner-big-picture">            
              <div>ENJOY FREEDOM</div>
              <div>
                <Button variant="primary" onClick={() => setModalShow(true)} className="clickItem">
                  Search a city weather
                </Button>
          
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </Col>
      </Row>
      <Row>
        <Col className="big-picture-2">
          <div className="top-head-1" style={{fontSize:"25px", padding:"10px", borderRadius:"7px", backgroundColor:"#e95f20"}}>See Latest Vacation Ideas</div>
        </Col> 
      </Row>
      <Row style={{padding:"10px", height:"20vw"}}> 
        <Col className="big-picture-2">
            <div><img src="./staticIMG/image_idea_1.png" alt="idea 1"  className="img-indi-1"/></div>
        </Col>
        <Col className="big-picture-2">
            <div><img src="./staticIMG/image_idea_2.png" alt="idea 1"  className="img-indi-2"/></div>
        </Col>
          <Col className="big-picture-2">
            <div><img src="./staticIMG/image_idea_3.png" alt="idea 1"  className="img-indi-3"/> </div>
          </Col>
      </Row>
      <Row>
        <Col className="big-picture-2">
          <div className="top-head-2" style={{fontSize:"25px", padding:"10px", borderRadius:"7px", backgroundColor:"#e95f20"}}>See Latest Vacation Ideas</div>
        </Col> 
      </Row>
      <Row>
        <Col className="card-items">
          <Col className="card-items-a" >
            <div>
                  <Card border="success" style={{width:"270px", height:"auto"}}>
                    <img src="./staticIMG/image_slider.png" alt="give" className="img-indi-3"/>
                  </Card>      

            </div>
            <div  className="img-indi-b" style={{width:"270px", height:"auto"}}>
                  <Card border="success" className="img-indi-b" >
                    <Card.Header >Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Success Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>      

            </div>
          </Col>
          <Col className="card-items-a"> 
            <div>
                  <Card border="success" style={{width:"270px", height:"auto"}}>
                    <img src="./staticIMG/image_idea_1.png" alt="give" className="img-indi-3" />
                  </Card>   
            </div>
            <div className="img-indi-b" style={{width:"270px", height:"auto"}}>
                  <Card border="success"  className="img-indi-b" >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Success Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>      

            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="footer" style={{padding:"10px", marginTop:"10px", borderRadius:"7px"}}>

        </Col>
      </Row>
    </Container>
      </>
    );
  }
  
  export default App;