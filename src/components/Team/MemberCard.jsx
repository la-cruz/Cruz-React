import React, { useEffect } from 'react';

function MemberCard({data}) {
    return (
        <section className="card-member wow fadeInUp">
            <div className="card">
                <img src={require(`../../assets/images/team/${data.imgsrc}`)} alt="" />
                <div className="overlay">
                    <div className="member-name">
                        <p className="role">{ data.role }</p>
                        <h3>{ data.name } { data.firstname }</h3>
                        <p className="spe">{ data.metier }</p>
                    </div>
                    <hr />
                    <div className="socials">
                        {
                            data.socials ?
                            data.socials.map(social => (
                                <a href={ social.link } target="_blank"><i className={social.class}></i></a>
                            ))
                            :
                            <div className="btn-more">
                                <a className="hover-shadow">Page profil à venir !</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberCard;