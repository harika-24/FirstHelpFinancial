import { Container,Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "./ShowsList.css";
/**
 * The ShowsList Component displays the list of movies in a grid.
 */
function ShowsList(props) {

    let MovieCards = null;
    if(props.shows && props.shows.length > 0)
     MovieCards = props.shows.map(show => <Col className="showCol" key={show.id}><MovieCard movie={show} /> </Col>);

    return (
        <Container>
            <Row className="showRow" lg={4}>
                {MovieCards ? MovieCards : <div className="no-show-div">NO SHOWS FOUND. STAY TUNED FOR MORE SHOWS.</div>}
            </Row>
        </Container>
    )
} 

export default ShowsList;