import React from 'react'
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

function SlickLink({data, type}) {
    
    var nbSlides = data.filter(elem => elem.is_home).length < 4 
    ? data.filter(elem => elem.is_home).length : 4;


    var settings = {
        infinite: false,
        autospeed: 200,
        speed: 500,
        slidesToShow: nbSlides,
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

    console.log(data);
    return (
        <div className="container-slider">
            <Slider {...settings}>
            {
                type === "project" ?
                    data.filter(elem => elem.is_home).map(project => (
                        <Card key={project.name} data={project} type={type}/>
                    ))
                :
                    data.map(feature => (
                        <Card key={feature.title_fr} data={feature} type={type}/>
                    ))
            }
            </Slider>
        </div>
    );   
}

export default SlickLink