import React from 'react'
import { Trans } from 'react-i18next'

function Perso({ data }) {
  return (
    <section className="perso-presentation">
      <img src={data.image} />
      <div className="info-perso">
        <h1>{data.name} {data.firstname}</h1>
        <p><Trans>{data.fonction}</Trans> - <Trans>{data.metier}</Trans></p>
        <ul>
          {
            data.socials.map(link => (
              <li><a href={link.link}><i className={link.icon}></i></a></li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Perso;