import React from 'react'
import SlickLink from '../Basic/SlickLink'
import { Trans } from 'react-i18next'

function RelatedProject({ projects }) {
  return (
    <section className="related-project">
      <h2 data-aos="fade-in"><Trans>label.perso.projects</Trans></h2>
      <SlickLink data={projects} type="project-perso" />
    </section>
  )
}

export default RelatedProject