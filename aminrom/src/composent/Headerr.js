import React from "react";


{/* importation du composants boostrap Carousel */}
import Carousel from 'react-bootstrap/Carousel';
{/* importation des images */}
import i1 from "./image/1.jpg";
import i2 from "./image/2.jpg";
import i3 from "./image/2.jpg";


{/* function header */}
function Headerr(){
    return ( 
    <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );

}
export default Headerr;
