import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images, currentIndex }) => {
  return (
    <Carousel
      selectedItem={currentIndex}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      centerMode
      centerSlidePercentage={20}
      autoPlay
      infiniteLoop
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={require(`../assets/img/${image}`)}
            alt={`Image ${index}`}
            style={{ width: "167px", height: "64px" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
