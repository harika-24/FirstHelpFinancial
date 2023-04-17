import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Checkout() {
  return (
    <Container>
      <Row className="main-row">
        <Col className="info-payment-col">
          <Row className="info-row">
            <Card>
              <Card.Title>Delivery</Card.Title>
              <Card.Subtitle>Mobile Free Entry</Card.Subtitle>
              <Card.Text>
                Ticket Availble by April 3, 2023. Email will be sent regarding
                instructions.
              </Card.Text>
            </Card>
          </Row>
          <Row className="payment-row">
            <Card>
              <Card.Title>Payment</Card.Title>

              <Form.Check
                type="radio"
                id="credit-radio"
                label="Credit Card/ Debit Card"
              />
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Card Number" />
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Month</Form.Label>
                  <Form.Control type="text" placeholder="Enter Month" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Year</Form.Label>
                  <Form.Control type="text" placeholder="Enter Year" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="Enter CVV" />
                </Form.Group>
              </Row>
              <hr />
              <Card.Subtitle>or Pay With</Card.Subtitle>
              <Form.Check type="radio" id="applepay-radio" label="Apple Pay" />
            </Card>
          </Row>
        </Col>
        <Col className="summary-col">
          <Card>
            <Row className="order-details">
              <Row>
                <Col>
                  <Card.Title> Total</Card.Title>
                </Col>
                <Col>
                  <Card.Title>$64.97</Card.Title>
                </Col>
              </Row>
              <Row>
                <Row>
                  <Card.Subtitle>Tickets</Card.Subtitle>
                </Row>
                <Col>$25.45 * 2</Col>
                <Col>$50.99</Col>
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
            <Row className="cancel-row">
                <Button>
                    Cancel Order
                </Button>
            </Row>
            <Row className="place-order-btn-row">
                <Row>
                    <Form.Check type="checkbox" label="I have read and agree to the terms of use" />
                    <Button variant="success">
                        Place Order
                    </Button>
                </Row>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
