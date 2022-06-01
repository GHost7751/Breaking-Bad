import React from 'react';
import {Carousel } from 'react-bootstrap'

const Home:React.FC = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://www.sostav.ru/app/public/images/news/2013/10/07/breaking_bad1.jpeg?rand=0.6037797152530402"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://media.myshows.me/shows/normal/0/c2/0c29613f893decccc881252ef9ad6f33.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Home;