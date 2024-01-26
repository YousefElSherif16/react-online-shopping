import { Container, Row } from "reactstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Container fluid>
      <Row className="hero-section-content d-flex flex-lg-row flex-column-reverse">
        <div className="col-12 col-lg-6 hero-section-content-image"></div>
        <div className=" col-12 col-lg-6 hero-section-content-text d-flex flex-column justify-content-md-center align-items-lg-start align-items-center text-center text-lg-start">
          <h1>
            Listen to <br />
            the
            <span id="amazing"> amazing</span>
            <br />
            music sound.
          </h1>
          <p>Experience music like never before</p>
          <a href="#">Shopping Now</a>
        </div>
      </Row>
    </Container>
  );
};

export default HeroSection;
