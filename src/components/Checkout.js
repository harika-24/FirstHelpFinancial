import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./checkout.css";

function Checkout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  return (
    <Container>
      <Row className="main-row">
        <Col className="info-payment-col" lg={7}>
          <Row className="info-row">
            <Card className="info-card">
              <Card.Title className="ps-0">
                Delivery <CheckCircleOutlinedIcon color="success" />
              </Card.Title>
              <Card.Subtitle>Mobile Free Entry</Card.Subtitle>
              <Card.Text className="pb-3">
                Ticket Availble by April 3, 2023. These mobile tickets will be
                transferred directly to you from a trusted seller.We'll email
                you instructions on how to accept them on original ticket
                provider's mobile app
              </Card.Text>
            </Card>
          </Row>
          <Row className="payment-row">
            <Card className="payment-card">
              <Card.Title>
                Payment <CheckCircleOutlinedIcon color="disabled" />
              </Card.Title>

              <Form.Check
                type="radio"
                id="credit-radio"
                label="Credit Card/ Debit Card"
                name="payment-method"
              />
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Card Number" />
              </Form.Group>
              <Row>
                <Form.Group as={Col} className="ps-0">
                  <Form.Label>Month</Form.Label>
                  <Form.Control type="text" placeholder="Enter Month" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Year</Form.Label>
                  <Form.Control type="text" placeholder="Enter Year" />
                </Form.Group>
                <Form.Group as={Col} className="pe-0">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="Enter CVV" />
                </Form.Group>
              </Row>
              <hr />
              <Card.Subtitle>or Pay With</Card.Subtitle>
              <Form.Check
                type="radio"
                id="applepay-radio"
                label="Apple Pay"
                className="mb-4"
                name="payment-method"
              />
            </Card>
          </Row>
        </Col>
        <Col className="summary-col" lg={5}>
          <Row>
            <Card className="summary-card">
              <Row className="order-details">
                <Row>
                  <Row>
                    <Col>
                      <Card.Title> Total</Card.Title>
                    </Col>
                    <Col>
                      <Card.Title>$64.97</Card.Title>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Card.Subtitle>Tickets</Card.Subtitle>
                  </Row>
                  <Row>
                    <Col>$25.45 * 2</Col>
                    <Col>$50.99</Col>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Card.Subtitle>Fees</Card.Subtitle>
                  </Row>
                  <Row>
                    <Col>Service Fee</Col>
                    <Col>$10.99</Col>
                  </Row>
                  <Row>
                    <Col>Order Processing Fee</Col>
                    <Col>$2.99</Col>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Card.Subtitle>Delivery</Card.Subtitle>
                  </Row>
                  <Row>
                    <Col>Mobile Entry</Col>
                    <Col>Free</Col>
                  </Row>
                </Row>
              </Row>
              <Row className="cancel-row d-flex">
                <Button onClick={() => navigate(-1)} className="cancelBtn">
                  Cancel Order
                </Button>
              </Row>
              <Row className="mb-4">
                <Row className="d-flex terms-check">
                  <Form.Check
                    className="mt-3"
                    type="checkbox"
                    label="I have read and agree to the terms of use"
                  />
                </Row>
                <Row className="place-order-btn d-flex mt-2">
                  <Button variant="success" className="orderBtn" onClick={handleShow}>
                    Place Order
                  </Button>
                </Row>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton onClick={() => navigate("/")}>
        <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>Thank you so much for your payment!! Tickets will be mailed to you on your email</Modal.Body>
        <Modal.Footer>
          <Link to={"/"}>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Checkout;
