import React from 'react'
import { Trans } from 'react-i18next'
import i18n from 'i18next';

function Perso({data}) {
  const language = i18n.language;
  const fileName = language === "fr" ? data.cv_fr : data.cv_en;
  var resume = null;
  
  try {
    resume = fileName === "" ? null : require("../../assets/cvs/" + fileName);
  } catch (error) {};

  return (
    <section className="perso-presentation">
      <img src={require(`../../assets/images/team/big.png`)} />
      <div className="info-perso">
        <h1>{data.name} <strong>{data.firstname}</strong></h1>
        <p><Trans>{data.fonction}</Trans> - <Trans>{data.metier}</Trans></p>
        <ul>
          {
            data.socials.map(link => (
              <li key={link.icon}><a href={link.link}><i className={link.icon}></i></a></li>
            ))
          }
          {
            resume !== null &&
            <li>
              <a href={resume} download={fileName}><i class="fas fa-file-download"></i></a>
            </li>
          }
        </ul>
      </div>
    </section>
  )
}

export default Perso;