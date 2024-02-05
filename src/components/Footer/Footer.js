import { Container, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer py-5 px-5">
      <Row className="footer-content mx-4">
        <div className="slogan col-6">
          <div className="logo">3legant.</div>
          <div className="rectangle"></div>
          <div className="title">Headphone Store</div>
        </div>
        <div className="nav col-6">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </Row>
      <Row className="bottom-bar mx-4">
        <div className="copyright justify-content-start col-6 ">
          <p className="copy">Copyright © 2023 3legant. All rights reserved</p>
          <p className="privacy">Privacy Policy</p>
          <p className="terms">Terms of Use</p>
        </div>
        <div className="socials col-6 ">
          <svg
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
