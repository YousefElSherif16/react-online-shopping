import { Container, Row, Col } from "reactstrap";
import "./ShopCollection.css";

const ShopCollection = () => {
  return (
    <Container>
      <Row className="py-4">
        <div className="shop-collection-text d-flex justify-content-lg-start justify-content-center">
          <p>Shop Collection</p>
        </div>
      </Row>
      <Row className="overflow-hidden">
        <Col lg="6">
          <div className="d-flex justify-content-lg-start justify-content-center align-item-center mb-md-0 mb-4">
            <div className="card">
              <img
                src={require("../../assets/img/shop-collection-headband.png")}
                className="card-img-top left-image"
                alt="..."
              />
              <div className="shop-collection-left-overlay">
                <p>Headband</p>
                <div>
                  <a href="#">
                    Collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16663 10H15.8333"
                        stroke="#121212"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8334 15L15.8334 10"
                        stroke="#121212"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8334 5L15.8334 10"
                        stroke="#121212"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex justify-content-lg-end justify-content-center align-item-center">
              <div className="card">
                <img
                  src={require("../../assets/img/shop-collection-earbuds.png")}
                  className="right-image"
                  alt="..."
                />
                <div className=" shop-collection-right-overlay">
                  <p>Earpuds</p>
                  <div>
                    <a href="#">
                      Collection
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16663 10H15.8333"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8334 15L15.8334 10"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8334 5L15.8334 10"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center align-item-center">
              <div className="card">
                <img
                  src={require("../../assets/img/shop-collection-accessories.png")}
                  className="right-image"
                  alt="..."
                />
                <div className=" shop-collection-right-overlay">
                  <p>Accessories</p>
                  <div>
                    <a href="#">
                      Collection
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16663 10H15.8333"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8334 15L15.8334 10"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.8334 5L15.8334 10"
                          stroke="#121212"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopCollection;
