import React from 'react'
import Slider from 'react-slick'
import Card from './Card';
import CardMember from './CardMember';

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
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4,
                }
            },
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
        <div className="container-slider wow fadeIn">
            <Slider {...settings}>
            {
                type === "project" ?
                    data.filter(elem => elem.is_home).map(project => (
                        <Card key={project.name} data={project} type={type}/>
                    ))
                : type === "feature" ?
                    data.map(feature => (
                        <Card key={feature.name} data={feature} type={type}/>
                    ))
                : type === "project-perso" ?
                    data.map(project => (
                        <Card key={project.name} data={project} type={type}/>
                    ))
                :
                    data.map(member => (
                        <CardMember key={member.name} data={member} type={type}/>
                    ))
            }
            </Slider>
        </div>
    );   
}

export default SlickLink