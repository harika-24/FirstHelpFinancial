import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function MovieCard (props) {

    return(
    
    <Card style={{ width: '18rem', height: '35rem' }} >
      <Card.Img style={ {height: '25rem'}} variant="top" src={props.movie.url} />
      <Card.Body>
        <Card.Title style={{fontSize: '16px'}}>{props.movie.title}</Card.Title>
        <Card.Text>
            {props.movie.time}
        </Card.Text>
        <Link to={`/movie/${props.movie.id}/`}><Button variant="primary">Get Tickets</Button></Link>
      </Card.Body>
    </Card>
    )
}

export default MovieCard;