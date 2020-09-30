import React from 'react';
import { Trans } from 'react-i18next';

function Presentation({data, scrollToRef}) {
    return (
        <div className="presentation">
            <h1>{data.name}</h1>
            <div className="presentation-infos">
                <img src={require(`../../assets/images/project/${data.image}`)} alt="img-logo" className="presentation-img" />
                <div className="presentation-text">
                    <h3>{data.date} - <Trans>{data.type}</Trans></h3>
                    <p className="description"><Trans>{data.desc}</Trans></p>
                    <div className="links">
                        {
                            data.links.map((elem, i) => (
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