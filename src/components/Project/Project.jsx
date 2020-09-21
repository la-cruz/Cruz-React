import React from 'react';
import Presentation from './Presentation';
import Features from './Features';

function Project( {data} ) {   
    console.log(data);
    return (
        <div className="project">
            <Presentation data={data.presentation} />
            <Features data={data.features} />

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