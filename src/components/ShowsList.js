import { Container,Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "./ShowsList.css";

function ShowsList(props) {
    return (
        <Container>
            <Row className="showRow" lg={4}>
                {props.shows && props.shows.length > 0 ? props.shows.map(show => <Col className="showCol"><MovieCard movie={show} key={show.id}/> </Col>) : <div>'NO SHOWS FOUND'</div>}
            </Row>
        </Container>
    )
} 

export default ShowsList;