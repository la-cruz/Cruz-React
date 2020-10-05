import React from 'react'
import { Trans } from 'react-i18next'

function StudiesCard({ study }) {

  var image = study.logo !== "" ? require(`../../assets/images/schools/${study.logo}`) : ""

  return (
    <article className="studies-elem" key={study.title}>
      <div className="studies-info">
        <h3><Trans>{study.title}</Trans></h3>
        <p><Trans>{study.date}</Trans> - <Trans>{study.location}</Trans></p>
        {
          study.list !== [] &&
          <ul>
            {
              study.list.map(elem => (
                <li key={`studies-${elem}`}><Trans>{elem}</Trans></li>
              ))
            }
          </ul>
        }
      </div>
      <img src={image} alt="studies-img"/>
    </article>
  )
}

export default StudiesCard