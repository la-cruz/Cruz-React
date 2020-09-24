import React from 'react'
import { Trans } from 'react-i18next'

function ExperienceCard({ data }) {

  var image = data.logo != "" ? require(`../../assets/images/companies/${data.logo}`) : ""

  return (
    <div className="experience-card">
      <img src={image} />
      <h3><Trans>{data.title}</Trans></h3>
      <p><Trans>{data.date}</Trans> - {data.company}</p>
      <hr />
      {
        data.list != [] &&
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