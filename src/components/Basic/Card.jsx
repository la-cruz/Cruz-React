import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import toKebabCase from '../../lib/toKebabCase'

function Card({key, data, type}) {

    var image = data.img ? require(`../../assets/images/projects/${data.img}`) : ""

    return (
        <div className={`container-card ${type}`} key={key}>
            <div className="content-card">
                <img src={image} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
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