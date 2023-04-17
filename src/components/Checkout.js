import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./checkout.css";

/**
 * The Checkout Component displays the Checkout Page.
 */
function Checkout(props) {
  const [show, setShow] = useState(false);
  const [paymentType, setPaymentType] = useState(null);
  const [paymentInformationIsValid, setPaymentInformationIsValid] =
    useState(false);
  const [creditCardNo, setCreditCardNo] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [acknowledgment, setAcknowledgment] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceFee = 10.99;
  const orderProcessingFee = 2.99;

  /**
   * Verify the user input anytime there is any change in the input.
   */
  useEffect(() => {
    verifyInputsForPayment();
  }, [paymentType, creditCardNo, expMonth, expYear, cvv, acknowledgment]);

  /**
   * Closes the modal and navigates to the Home.
   */
  const handleClose = () => {
    navigate("/");
    props.handleSuccessfulSeatBooking();
    setShow(false);
  };

  
  const handleShow = () => {
    setShow(true);
  };

  /**
   * This function is to validate the user input
   */
  const verifyInputsForPayment = () => {
    const numberInputCheck = /^\d+$/;
    let currentYear = new Date().getFullYear() % 100;
    let currentMonth = new Date().getMonth() + 1;
    console.log("Acknowledgement " + acknowledgment);
    if (!paymentType) {
      setPaymentInformationIsValid(false);
      setErrorMessage("Payment method needs to be selected");
    }  else if (paymentType === "apple-pay" && acknowledgment) {
      setPaymentInformationIsValid(true);
      setErrorMessage('');
    } else if (paymentType === "credit-card" && acknowledgment) {
      if (creditCardNo === null || creditCardNo.length !== 16) {
        setPaymentInformationIsValid(false);
        setErrorMessage("Re-check your card number");
      } else if (
        expMonth === null ||
        expMonth.length !== 2 ||
        !numberInputCheck.test(expMonth) ||
        parseInt(expMonth, 10) < 1 ||
        parseInt(expMonth, 10) > 12
      ) {
        setPaymentInformationIsValid(false);
        setErrorMessage("Enter valid month");
      } else if (
        expYear === null ||
        expYear.length !== 2 ||
        !numberInputCheck.test(expYear) ||  parseInt(expYear, 10) < currentYear ||  (parseInt(expYear, 10) === currentYear && parseInt(expMonth,10) <= currentMonth)
      ) {
        setPaymentInformationIsValid(false);
        setErrorMessage("Enter valid year");
      } else if (
        cvv === null ||
        cvv.length !== 3 ||
        !numberInputCheck.test(cvv)
      ) {
        setPaymentInformationIsValid(false);
        setErrorMessage("Enter valid CVV");
      } 
      else {
        setPaymentInformationIsValid(true);
        setErrorMessage('')
      }
    }  else {
      setPaymentInformationIsValid(false);   
      setErrorMessage("Please accept the terms and conditions.");
    }
  };

  const handlePaymentSelection = (event) => {
    setPaymentType(event.target.value);
    if (event.target.value === "apple-pay") {
      setCreditCardNo("");
      setExpMonth("");
      setExpYear("");
      setCVV("");
    }
  };

  const handleCreditCardChange = (event) => {
    setCreditCardNo(event.target.value);
  };

  const handleMonthChange = (event) => {
    setExpMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setExpYear(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleAcknowledgement = (event) => {
    setAcknowledgment(event.target.checked);
  };

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
                Payment{" "}
                <CheckCircleOutlinedIcon
                  color={paymentInformationIsValid ? "success" : "disabled"}
                />
              </Card.Title>

              <Form.Check
                type="radio"
                id="credit-radio"
                label="Credit Card/ Debit Card"
                name="payment-method"
                value="credit-card"
                onChange={handlePaymentSelection}
              />
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Card Number (XXXX-XXXX-XXXX-XXXX)"
                  onChange={handleCreditCardChange}
                  value={creditCardNo}
                />
              </Form.Group>
              <Row>
                <Form.Group as={Col} className="ps-0">
                  <Form.Label>Month</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Month (MM)"
                    onChange={handleMonthChange}
                    value={expMonth}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Year (YY)"
                    onChange={handleYearChange}
                    value={expYear}
                  />
                </Form.Group>
                <Form.Group as={Col} className="pe-0">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    onChange={handleCVVChange}
                    value={cvv}
                  />
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
                value="apple-pay"
                onChange={handlePaymentSelection}
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
                      <Card.Title>{`\$${(
                        props.movie.ticketPrice * props.seats +
                        serviceFee +
                        orderProcessingFee
                      ).toFixed(2)}`}</Card.Title>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Card.Subtitle>Tickets</Card.Subtitle>
                  </Row>
                  <Row>
                    <Col>{`\$${props.movie.ticketPrice} * ${props.seats}`}</Col>
                    <Col>{`\$${props.movie.ticketPrice * props.seats}`}</Col>
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
                    onChange={handleAcknowledgement}
                    checked={acknowledgment}
                  />
                </Row>
                <Row className="place-order-btn d-flex mt-2">
                  <div className="error-msg">
                    {errorMessage}
                  </div>
                  <Button
                    variant={
                      paymentInformationIsValid ? "success" : "secondary"
                    }
                    className="orderBtn"
                    onClick={handleShow}
                    disabled={!paymentInformationIsValid}
                  >
                    Place Order
                  </Button>
                </Row>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Thank you so much for your payment!! Tickets will be mailed to you on
          your email
        </Modal.Body>
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
