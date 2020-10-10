import React from 'react'
import { Trans } from 'react-i18next'
import StudiesCard from './StudiesCard'
import RoadMap from './RoadMap'

function Studies({ studies }) {
  return (
    <section className="studies">
      <h2 data-aos="fade-in"><Trans>label.perso.studies</Trans></h2>
      <div className="studies-content">
        <RoadMap studies={studies} />
        <div className="studies-list">
          {
            studies.map(study => (
              <StudiesCard study={study} key={study.title} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Studies;