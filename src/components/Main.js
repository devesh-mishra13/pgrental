import Carousel from 'react-bootstrap/Carousel';
import './Main.css'

export default function CarouselFade() {
  return (
    <Carousel style={{width:"100%",height:"100%"}} fade controls={false} indicators={false}>
      <Carousel.Item style={{width:"90%",height:"90%"}}>
        <img
          className="d-block w-100"
          src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/tips-to-find-house-for-rent.jpg"
          alt="First slide"
          style={{width:"100%",height:"100%",position:"absolute"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{width:"90%",height:"90%"}}>
        <img
          className="d-block w-100"
          src="https://www.avail.co/wp-content/uploads/2022/10/renting-a-house-vs-renting-an-apartment.jpg"
          alt="Second slide"
          style={{width:"100%",height:"100%",position:"absolute"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{width:"90%",height:"90%"}}>
        <img
          className="d-block w-100"
          src="https://img.staticmb.com/mbcontent/images/uploads/2022/5/rental-agreement-registration-and-tenure_1653566247259.jpg"
          alt="Third slide"
          style={{width:"100%",height:"100%",position:"absolute"}}
        />
      </Carousel.Item>
    </Carousel>
  );
}



