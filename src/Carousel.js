import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouselFadeExample() {
  return (
    <Carousel fade className="mb-6">
      <Carousel.Item>
        <Image
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          text="First slide"
          src="/images/himalayan.png"
          //   className="img-carousel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          text="First slide"
          src="/images/harley35.png"
          className="img-carousel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          text="First slide"
          src="/images/triumphspeed400.png"
          className="img-carousel"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
