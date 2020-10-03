import React from 'react'
import SlickLink from '../Basic/SlickLink'
import { Trans } from 'react-i18next'

function RelatedProject({ projects }) {
  return (
    <section className="related-project">
      {
        projects.length === 0 ?
          <h2><Trans>label.perso.noProjects</Trans></h2>
        :
          <h2><Trans>label.perso.projects</Trans></h2>
      }
      <SlickLink data={projects} type="project-perso"></SlickLink>
    </section>
  )
}

export default RelatedProject