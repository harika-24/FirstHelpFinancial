import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {useState} from 'react';
import "./Movie.css";

function Movie(props) {
  const [seats, setSeats] = useState(1);
  console.log("No of Seats " + seats);
  let { id } = useParams();
  let movies = props.shows;
  let movie = movies.filter((m) => m.id === parseInt(id))[0];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSeatBooking(seats);
  }

  const handleSelectionChange = (event) => {
    setSeats(event.target.value);
  }


  return (
    <div>
      <Container>
        <Row>
          <Col className="colPoster">
            <div className="poster">
              <Image className="bigPicture" src={movie.url} />
            </div>
          </Col>
          <Col>
            <Row className="title">
              <div>
                <h3>{movie.title}</h3>
              </div>
            </Row>
            <Row className="title">
              <div>
                <p>{movie.description}</p>
              </div>
            </Row>
            <Row>
              <Col>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Select className="selectCtrl" values={seats} onChange={handleSelectionChange} >
                      <option value="1" >1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="d-flex chkOutBtnFormGroup">
                  <Link to={'/checkout'}>
                    <Button className="p-3" variant="primary" type="submit">
                        Proceed to Checkout
                    </Button>
                  </Link>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
