import React from 'react'
import { Trans } from 'react-i18next'

function ExperienceCard({ data, first }) {

  var image = data.logo !== "" ? require(`../../assets/images/companies/${data.logo}`) : ""

  var animateClass = first ? "bounceInLeft" : "bounceInRight"

  return (
    <div className={`experience-card wow ${animateClass}`} data-wow-delay={`${(Math.random()*5) / 10}s`}>
      <img src={image} alt="exp-card-img" />
      <h3><Trans>{data.title}</Trans></h3>
      <p><Trans>{data.date}</Trans> - {data.company}</p>
      <hr />
      {
        data.list !== [] &&
        <ul>
          {
            data.list.map(elem => (
              <li key={`experience-elem-${elem}`}><Trans>{elem}</Trans></li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default ExperienceCard