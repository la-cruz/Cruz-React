import React from 'react';
import team from '../../data/team.json'
import toKebabCase from '../../lib/toKebabCase'
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

function CardMember({key, data, type}) {
    var img = "";
    try {
        img = require('../../assets/images/team/' + data.image);
    } catch (ex) {
        img = require('../../assets/images/team/avatar.png');
    }

    const hasLink = () => {
      return team.filter(elem => toKebabCase(`${elem.firstname}-${elem.name}`) === toKebabCase(data.name))[0] !== null
    }

    return (
        <div className={`container-card ${type}`} key={key}>
            <div className="content-card">
                <div className="content-member">
                    <img src={img} alt=""/>
                    <h3>{data.name}</h3>
                </div>
                <ul>
                    {
                        data.roles.map( (role, i) => (
                            <li key={i}>{role.elem_fr}</li>
                        ))
                    }
                </ul>
                {
                  hasLink() ?
                  <Link to={`/team/${toKebabCase(data.name)}`} className="btn-card hover-shadow"><Trans>label.see.page.perso</Trans></Link> :
                  <a className="btn-card unavailable"><i className="far fa-clock"></i><Trans>label.page.perso.unavailable</Trans></a>
                }
            </div>
        </div>
    );
}

export default CardMember;