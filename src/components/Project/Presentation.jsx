import React from 'react';
import { Trans } from 'react-i18next';

function Presentation({data, scrollToRef}) {
    return (
        <div className="presentation">
            <h1 data-aos="zoom-up"><Trans>{data.name}</Trans></h1>
            <div className="presentation-infos">
                <img src={require(`../../assets/images/project/${data.image}`)} alt="img-logo" data-aos="fade-right" className="presentation-img" />
                <div className="presentation-text">
                    <h3 data-aos="fade-left" data-aos-delay="200">{data.date} - <Trans>{data.type}</Trans></h3>
                    <p data-aos="fade-left" className="description" data-aos-delay="400"><Trans>{data.desc}</Trans></p>
                    <div data-aos="fade-left" className="links" data-aos-delay="600">
                        {
                            data.links.map(elem => (
                                <a className="hover-shadow" href={elem.link} key={elem.link} target="_blank" rel="noopener noreferrer">
                                    <i className={elem.icon} alt="link-img" />
                                    <Trans>{elem.text}</Trans>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <picture className="scroll" onClick={scrollToRef}>
                <source srcSet={require('../../assets/images/scroll.webp')} type="image/webp" />
                <img src={require('../../assets/images/scroll.png')} alt="scroll" />
            </picture>
        </div> 
    );
}

export default Presentation;