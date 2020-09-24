import React from 'react'
import { Trans } from 'react-i18next'
import SkillsCard from './SkilsCard'

function RelatedSkills({ skills }) {
  return (
    <section className="related-skills">
      <h2><Trans>label.perso.skills</Trans></h2>
      {
        skills.map(skill => (
          <SkillsCard skill={skill} />
        ))
      }
    </section>
  )
}

export default RelatedSkills