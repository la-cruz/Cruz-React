import React from 'react';
import { Trans } from 'react-i18next';

function Presentation({data, scrollToRef}) {
    return (
        <div className="presentation">
            <h1 className="wow zoomInUp"><Trans>{data.name}</Trans></h1>
            <div className="presentation-infos">
                <img src={require(`../../assets/images/project/${data.image}`)} alt="img-logo" className="presentation-img wow fadeInLeft" />
                <div className="presentation-text">
                    <h3 className="wow fadeInRight" data-wow-delay="0.2s">{data.date} - <Trans>{data.type}</Trans></h3>
                    <p className="description wow fadeInRight" data-wow-delay="0.4s"><Trans>{data.desc}</Trans></p>
                    <div className="links wow fadeInRight" data-wow-delay="0.6s">
                        {
                            data.links.map(elem => (
                                <a className="hover-shadow" href={elem.link} key={elem.link} >
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