import React from 'react';

function CardMember({data, type}) {
    var img = "";
    try {
        img = require('../../assets/images/team/' + data.image);
    } catch (ex) {
        img = require('../../assets/images/team/avatar.png');
    }

    return (
        <div className={`container-card ${type}`}>
            <div className="content-card">
                <div className="content-member">
                    <img src={img} alt=""/>
                    <h3>{data.name}</h3>
                </div>
                <ul>
                    {
                        data.roles.map( role => (
                            <li>{role.elem_fr}</li>
                        ))
                    }
                </ul>
                <a className="btn-card hover-shadow">Page profil à venir !</a>
            </div>
        </div>
    );
}

export default CardMember;