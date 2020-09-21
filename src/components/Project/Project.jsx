import React from 'react';

function Project( {data} ) {   
    console.log(data);
    return (
        <div className="project">
            <div className="presentation">
                <h1>{ data.name }</h1>
                {/* TODO: ADDED IMG TO ASSETS & DELETE CONDITION */}
                {/* <img src={data.image === "" ? "https://via.placeholder.com/624x395" : data.image} alt="img-pres" /> */}
                <div className="presentation-infos">
                    <img src={require('../../assets/images/projects/' + data.image)} alt="img-logo" className="presentation-img"/>
                    <div className="presentation-text">
                        <h2> { data.date_fr + " - " + data.type.elem_fr } </h2>
                        <p className="description"> { data.desc_fr } </p>
                        <div className="links">
                            {
                                data.links.map( (elem, i) => (
                                    <a href={ elem.link } key={i} >
                                        <i className={elem.icon} alt="link-img" />
                                        { elem.text_fr }
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <picture>
                    <source srcSet={require('../../assets/images/scroll.webp')} type="image/webp" />
                    <img src={require('../../assets/images/scroll.png')} alt="scroll"/>
                </picture>
            </div>

            <div className="features">
                <h2>Fonctionnalités</h2>
                {
                    data.features.map( (elem,i) => (
                        <div className="card-feature" key={i}>
                            {/* TODO: ADDED IMG TO ASSETS & DELETE CONDITION */}
                            <img src={elem.image === "" ? "https://via.placeholder.com/50x100" : elem.image} alt="img-card" />
                            <h3> { elem.title_fr } </h3>
                            <p> { elem.description_fr } </p>
                        </div>
                    ))
                }
            </div>

            <div className="technologies">
                <h2>Technologies</h2>
                {
                    data.technologies.map( (technology, i) => (
                        <img src={require('../../assets/images/tools/' + technology.toLowerCase() + ".svg")} alt="img-techno" height="100px" width="100px" key={i} />
                    ))
                }
            </div>

            <div className="team">
                <h2>Equipe</h2>
                {
                    data.team.map( (member, i) => {
                        {/* TODO: ADDED IMG TO ASSETS & DELETE CONDITION */}
                        var img = "";
                        try{
                            img = require('../../assets/images/team/' + member.image);
                        } catch (ex) {
                            img = require('../../assets/images/team/avatar.png');
                        }
                        return (
                            <div className="card-team" key={i}>
                                <img src={img} alt="img-team" />
                                <p> {member.name} </p>
                                <ul>
                                    {
                                        member.roles.map( (role, i) => (
                                            <li key={i}> {role.text_fr} </li>
                                        ))
                                    }
                                </ul>
                                <a href={'/' + member.name}>VOIR LE PROFIL</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Project;