import React, { useEffect } from 'react'
import Slider from 'react-slick'
import Card from './Card';
import CardMember from './CardMember';

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
    
    function getNbSlides() {
        if (type === "project") {
            return data.filter(elem => elem.is_home).length < 4 ?
            data.filter(elem => elem.is_home).length : 4;
        } else {
            return data.length < 4 ? data.length : 4;
        }
    }

    var settings = {
        infinite: false,
        autospeed: 200,
        speed: 500,
        slidesToShow: getNbSlides(),
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
                type === "project" ?
                    data.filter(elem => elem.is_home).map(project => (
                        <Card key={project.name} data={project} type={type}/>
                    ))
                : type === "feature" ?
                    data.map(feature => (
                        <Card key={feature.title_fr} data={feature} type={type}/>
                    ))
                : 
                    data.map(feature => (
                        <CardMember key={feature.title_fr} data={feature} type={type}/>
                    ))
            }
            </Slider>
        </div>
    );   
}

export default SlickLink