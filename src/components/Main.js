import Carousel from 'react-bootstrap/Carousel';
import './Main.css'

function CarouselFade() {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image "
          src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/tips-to-find-house-for-rent.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image "
          src="https://www.avail.co/wp-content/uploads/2022/10/renting-a-house-vs-renting-an-apartment.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image "
          src="https://img.staticmb.com/mbcontent/images/uploads/2022/5/rental-agreement-registration-and-tenure_1653566247259.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;