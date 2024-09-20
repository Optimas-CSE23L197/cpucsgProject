import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Style/Landing.css';  // Create this CSS file for custom styles

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="carousel"
      >
        {/* <div className="carousel-overlay"></div> */}
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/09/04/16/48/taj-mahal-3654227_1280.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2014/01/14/19/09/vikasa-soudha-245035_1280.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2010/11/29/india-294_960_720.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2019/09/25/06/31/victoria-memorial-4502719_960_720.jpg" alt="Slide 4" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg" alt="Slide 5" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
