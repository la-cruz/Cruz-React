import React from 'react'
import { Trans } from 'react-i18next'
import ExperienceCard from './ExperienceCard'

function Experiences({ experiences }) {
  return (
    <section className="experiences">
      <h2><Trans>label.perso.experiences</Trans></h2>
      {
        experiences.map(exp => (
          <ExperienceCard data={exp} />
        ))
      }
    </section>
  )
}

export default Experiences