import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./HomeComponent.css"

function HomeComponent() {
    return(
        <div className="App">
            <Navbar bg="primary" expand="lg" sticky="top" variant="dark">
                <Container className="container-fluid">
                    <Navbar.Brand className='brand' href='/'>
                        <img src="/images/ticketmaster-white.png" alt="logo" className='brandLogo' />

                      
                    </Navbar.Brand>

                </Container>

            </Navbar>
        </div>
    )

}

export default HomeComponent;