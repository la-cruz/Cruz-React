import React from 'react';

function Presentation({data}) {
    return (
        <div className="presentation">
            <h1>{data.name}</h1>
            {/* TODO: ADDED IMG TO ASSETS & DELETE CONDITION */}
            {/* <img src={data.image === "" ? "https://via.placeholder.com/624x395" : data.image} alt="img-pres" /> */}
            <div className="presentation-infos">
                <img src={require('../../assets/images/projects/' + data.image)} alt="img-logo" className="presentation-img" />
                <div className="presentation-text">
                    <h3> { data.date_fr + " - " + data.type.elem_fr } </h3>
                    <p className="description"> {data.desc_fr} </p>
                    <div className="links">
                        {
                            data.links.map((elem, i) => (
                                <a className="hover-shadow" href={elem.link} key={i} >
                                    <i className={elem.icon} alt="link-img" />
                                    { elem.text_fr}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <picture>
                <source srcSet={require('../../assets/images/scroll.webp')} type="image/webp" />
                <img src={require('../../assets/images/scroll.png')} alt="scroll" />
            </picture>
        </div>
    );
}

export default Presentation;