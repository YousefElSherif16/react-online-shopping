import { Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleDashboardNavigate = () => {
    navigate("/dashboard");
  };

  const handleHomeNavigate = () => {
    navigate("/");
  };

  return (
    <Container fluid>
      <Row className="navigation-bar d-flex justify-content-between align-items-center">
        <div className="col-sm-3 col-6 navigation-bar-logo d-flex justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="d-md-none d-block"
          >
            <path
              d="M7 8H17M7 12H17M7 16H17"
              stroke="#141718"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h2 onClick={handleHomeNavigate}>3legant.</h2>
        </div>
        <div className="col-sm-6 col-0 d-md-flex d-none justify-content-center navigation-bar-menu">
          <ul className="d-flex justify-content-center align-items-center gap-4">
            <li>
              <button onClick={handleHomeNavigate}>
                Home
              </button>
            </li>
            <li>
              <button className="gap-0.5">
                Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M5.20435 6.75L9.70435 11.25L14.2043 6.75"
                    stroke="#141718"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button className="gap-0.5">
                Product
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M5.20435 6.75L9.70435 11.25L14.2043 6.75"
                    stroke="#141718"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button onClick={handleDashboardNavigate}>Dashboard</button>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 col-6 d-flex justify-content-center navigation-bar-icons">
          <ul className="d-flex gap-3">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="10" fill="#141718" />
                <text x="6.5" y="14" fill="#ffab00" className="icon-text">
                  2
                </text>
              </svg>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default NavigationBar;
