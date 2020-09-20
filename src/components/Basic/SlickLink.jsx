import React from 'react'
import projectsWeb from "../../data/projectsWeb.json"
import projectsJV from "../../data/projectsJV.json"
import Slider from 'react-slick'
import Card from './Card';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <span className="wow bounceInRight" onClick={onClick}>
          <i className="fas fa-chevron-right"></i>
        </span>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <span className="wow bounceInLeft" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </span>
    );
}

function SlickLink({category}) {
    console.log(category);
    var settings = {
        infinite: false,
        autospeed: 200,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="container-slider">
            <Slider {...settings}>
            {
                category === "web" ?
                projectsWeb.filter(elem => elem.is_home).map(project => (
                    <Card key={project.name} data={project} />
                ))
                :
                projectsJV.filter(elem => elem.is_home).map(project => (
                    <Card key={project.name} data={project} />
                ))
            }
            </Slider>
        </div>
    );   
}

export default SlickLink