import './style.css'
import BootstrapCarousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ imgSrc }) => {
  return (
    <div className="carousel-image">
      <img
        src={imgSrc}
        className="d-block w-100"
        alt="Carousel Slide"
      />
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

const Carousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item interval={1000}>
        <ExampleCarouselImage imgSrc="./images/imgCarousel01-1420x300.png" />
        {/* <ExampleCarouselImage imgSrc="./images/teste01.png" /> */}
        <BootstrapCarousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item interval={500}>
        <ExampleCarouselImage imgSrc="./images/imgCarousel02-1420x300.png" />
        {/* <ExampleCarouselImage imgSrc="./images/teste.png" /> */}
        <BootstrapCarousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <ExampleCarouselImage imgSrc="./images/imgCarousel03-1420x300.png" />
        {/* <ExampleCarouselImage imgSrc="./images/teste03.png" /> */}
        <BootstrapCarousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  )
}
  
export default Carousel;
