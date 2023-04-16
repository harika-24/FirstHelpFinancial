import {Routes, Route, Link} from "react-router-dom";

//Bootstrap Links
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

//Component Links
import ShowsList from "./components/ShowsList";
import Movie from "./components/Movie";

//CSS Links
import "./App.css"

function App() {
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
                    <ShowsList />
                }/>
                <Route exact path={"/movie"} element={
                    <Movie />
                }/>
            </Routes>
        </div>
    )

}

export default App;