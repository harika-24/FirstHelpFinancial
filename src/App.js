import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import { movieList } from "./utils/data";


//Bootstrap Links
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

//Component Links
import ShowsList from "./components/ShowsList";
import Movie from "./components/Movie";
import Checkout from "./components/Checkout";

//CSS Links
import "./App.css"

function App() {
    
    const [movies, setMovies] = useState(movieList);
    const [selectedMovie, setMovie] = useState(null);
    const [noOfSeats, setNoOfSeats] = useState(0);

    const handleSeatBooking = (movieBooked,bookingSeatQty) => {
        console.log("I AM IN APP HANDLE SEAT BOOKING " + movieBooked);
        setNoOfSeats(bookingSeatQty)
        setMovie(movieBooked);
    }

    const handleSuccessfulSeatBooking = () => {
        setNoOfSeats(0)
        setMovie(null);
       
    }

    console.log("No of seats and movie after succesful checkout" + noOfSeats + " " + selectedMovie);

    return(
        <div className="Home">
            <Navbar bg="primary" expand="lg" sticky="top" variant="dark">
                <Container className="container-fluid">
                    <Navbar.Brand className='brand' href='/'>
                        <img src="/images/ticketmaster-white.png" alt="logo" className='brandLogo' />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path={"/"} element={
                    <ShowsList shows={movies} />
                }/>
                <Route exact path={"/movie/:id/"} element={
                    <Movie  shows={movies} handleSeatBooking={handleSeatBooking} />
                }/>
                <Route exact path={"/checkout"} element={
                    <Checkout seats={noOfSeats} movie={selectedMovie} handleSuccessfulSeatBooking={handleSuccessfulSeatBooking} />
                }/>
            </Routes>
        </div>
    )

}

export default App;