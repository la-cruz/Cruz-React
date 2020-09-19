import React from 'react';

function Card({data}) {
    return (
        <div className="container-card">
            <div className="content-card">
                <img src={require(`../../assets/images/projects/${data.img}`)} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <a className="btn-card" href="">En savoir plus</a>
            </div>
        </div>
    );
}

export default Card;