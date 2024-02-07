import { Container, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer pt-5 pb-2 px-5">
      <Row className="d-flex flex-column flex-md-row justify-content-between w-100 px-4">
        <div className="col-md-6 col-12 d-flex flex-column flex-md-row justify-content-start align-items-center">
          <div className="logo m-2">3legant.</div>
          <div className="rectangle m-2"></div>
          <div className="title m-2">Headphone Store</div>
        </div>
        <div className="col-md-6 col-12">
          <ul className="d-flex flex-column flex-md-row justify-content-end align-items-center">
            <li className="m-2">
              <a href="#">Home</a>
            </li>
            <li className="m-2">
              <a href="#">Shop</a>
            </li>
            <li className="m-2">
              <a href="#">Product</a>
            </li>
            <li className="m-2">
              <a href="#">Blog</a>
            </li>
            <li className="m-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </Row>
      <Row className="bottom-bar w-100 m-4 d-flex flex-column flex-md-row align-items-center px-4">
        <div className="d-flex flex-wrap col-md-8 mt-3 order-2 order-md-1 col-12 align-items-center justify-content-center justify-content-md-start">
          <p className="copy mx-2 mt-md-0 mt-3 d-flex justify-content-center justify-content-md-start order-md-1 order-3 col-12 col-md-3">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <p className="privacy mx-2 order-md-2 order-1  col-md-1 justify-content-center">
            Privacy Policy
          </p>
          <p className="terms mx-2 order-md-3 order-2  col-md-1 justify-content-center d-flex">
            Terms of Use
          </p>
        </div>
        <div className="col-md-4 col-12 mt-3 d-flex justify-content-md-end justify-content-center order-1 order-md-2">
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              stroke="#FEFEFE"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
            <circle cx="12" cy="12" r="5" stroke="#FEFEFE" strokeWidth="1.5" />
          </svg>
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="2"
              y="3"
              width="20"
              height="18"
              rx="4"
              stroke="#FEFEFE"
              strokeWidth="1.5"
            />
            <path
              d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
              stroke="#FEFEFE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
