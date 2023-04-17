import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Movie.css";

function Movie(props) {
  let { id } = useParams();
  console.log("params " + id);
  let movies = props.shows;
  let movie = movies.filter((m) => m.id === parseInt(id))[0];
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
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Select values={1}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Proceed to Checkout
                  </Button>
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
