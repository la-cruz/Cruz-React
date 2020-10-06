import React from 'react'
import { Trans } from 'react-i18next'
import i18n from 'i18next';

function Perso({ data, scrollToRef }) {
    const language = i18n.language;
    const fileName = language === "fr" ? data.cv_fr : data.cv_en;
    var resume;

    try {
        resume = fileName === "" ? null : require("../../assets/cvs/" + fileName);
    } catch (error) {
        resume = null;
    };

    return (
        <section className="perso-presentation">
            <div className="info-perso">
                <h1>{data.name} <strong>{data.firstname}</strong></h1>
                <p><Trans>{data.fonction}</Trans> - <Trans>{data.metier}</Trans></p>
                <ul>
                    {
                        data.socials.map(link => (
                            <li key={link.icon}>
                                <a href={link.name === "mail" ? "mailto:" + link.link : "" + link.name === "tel" ? "tel:" + link.link : "" + link.link} {...link.name === "mail" ? { target: "_blank", rel: "noopener noreferrer" } : {}}>
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {
                    resume !== null &&
                    <a className="hover-shadow cv" href={fileName} download={fileName}><i class="fas fa-file-download"></i><Trans>label.perso.cv</Trans></a>
                }
            </div>
            <picture className="scroll" onClick={scrollToRef}>
                <source srcSet={require('../../assets/images/scroll.webp')} type="image/webp" />
                <img src={require('../../assets/images/scroll.png')} alt="scroll" />
            </picture>
        </section >
    )
}

export default Perso;