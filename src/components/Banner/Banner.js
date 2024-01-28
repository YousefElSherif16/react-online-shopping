import { Container, Row, Col } from "reactstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="banner-content align-items-center">
        <Col lg="6" className="p-0 order-2 order-lg-1">
          <img
            className="w-100"
            src={require("../../assets/img/banner-image.png")}
            alt=""
          />
        </Col>
        <Col lg="6" className="px-md-5 px-4 py-4 order-1 order-lg-2">
          <div className="flex-column">
            <p className="sale py-2">pROMOTION</p>
            <p className="title py-2">Hurry up! 40% OFF</p>
            <p className="phrase py-2">
              Thousands of high tech are waiting for you
            </p>
          </div>
          <div className="py-2">
            <p className="offer">Offer expires in:</p>
            <div className="d-flex py-2 gap-3">
              <div className="timer-card-item">
                <div className="timer-card-item-number">
                  <p>02</p>
                </div>
                <div className="timer-card-item-text">Days</div>
              </div>
              <div className="timer-card-item">
                <div className="timer-card-item-number">
                  <p>12</p>
                </div>
                <div className="timer-card-item-text">Hours</div>
              </div>
              <div className="timer-card-item">
                <div className="timer-card-item-number">
                  <p>45</p>
                </div>
                <div className="timer-card-item-text">Minutes</div>
              </div>
              <div className="timer-card-item">
                <div className="timer-card-item-number">
                  <p>05</p>
                </div>
                <div className="timer-card-item-text">Seconds</div>
              </div>
            </div>
          </div>
          <div className="banner-button py-2 d-flex justify-content-center">
            <a href="">Shop now</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
