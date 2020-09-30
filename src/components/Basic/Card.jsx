import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import toKebabCase from '../../lib/toKebabCase'

function Card({key, data, type}) {

    if (type === "project-perso") {
        type = "project";
    }
    var image = data.img ? require(`../../assets/images/${type}/${data.img}`) : ""

    return (
        <div className={`container-card ${type}`} key={key}>
            <div className="content-card">
                <img src={image} alt=""/>
                <h3><Trans>{data.name}</Trans></h3>
                <p><Trans>{data.description}</Trans></p>
                {
                    type !== "feature" ?
                    data.has_link ?
                    <Link to={`/projects/${toKebabCase(data.name)}`} className="btn-card hover-shadow"><Trans>label.see.page.project</Trans></Link> :
                    <a className="btn-card unavailable"><i className="far fa-clock"></i><Trans>label.page.project.unavailable</Trans></a> :
                    <></>
                }
            </div>
        </div>
    );
}

export default Card;