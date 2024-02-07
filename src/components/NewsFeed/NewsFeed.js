import { Container } from "reactstrap";
import "./NewsFeed.css";
const NewsFeed = () => {
  return (
    <Container>
      <div className="">
        <div className="newsfeed-title p-4">
          <p className="sale">newsfeed</p>
          <p className="title">Instagram</p>
          <p className="caption">
            Follow us on social media for more discount & promotions
          </p>
          <p className="mention">@3legant_official</p>
        </div>
        <div className="newsfeed-cards d-flex flex-wrap justify-content-center justify-content-md-between py-4 w-100">
          <div className="newsfeed-card-item mx-2">
            <img
              src={require("../../assets/img/newsfeed-first-image.png")}
              alt=""
            />
          </div>
          <div className="newsfeed-card-item mx-2">
            <img
              src={require("../../assets/img/newsfeed-second-image.png")}
              alt=""
            />
          </div>
          <div className="newsfeed-card-item mx-2">
            <img
              src={require("../../assets/img/newsfeed-third-image.png")}
              alt=""
            />
          </div>
          <div className="newsfeed-card-item mx-2">
            <img
              src={require("../../assets/img/newsfeed-forth-image.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsFeed;
