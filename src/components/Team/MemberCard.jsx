import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

function MemberCard({data}) {
    return (
        <section className="card-member wow fadeInUp">
            <div className="card">
                <img src={require(`../../assets/images/team/${data.imgsrc}`)} alt="" />
                <div className="overlay">
                    <div className="member-name">
                        <p className="role"><Trans>{ data.role }</Trans></p>
                        <h3>{ data.name } { data.firstname }</h3>
                        <p className="spe"><Trans>{ data.metier }</Trans></p>
                    </div>
                    <hr />
                    <div className="socials">
                        {
                            data.socials ?
                            data.socials.map(social => (
                                <a href={social.link} target="_blank" rel="noopener noreferrer"><i className={social.class}></i></a>
                            ))
                            :
                            <div className="btn-more">
                              {
                                  data.has_link ?
                                  <Link to={`/team/${data.name.toLowerCase()}-${data.firstname.toLowerCase()}`} className="hover-shadow"><Trans>label.see.page.perso</Trans></Link> :
                                  <button className="btn-card unavailable"><i className="far fa-clock"></i><Trans>label.page.perso.unavailable</Trans></button>
                              }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberCard;