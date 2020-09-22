import React from 'react'
import { Trans } from 'react-i18next'

function About({ bio }) {
  return (
    <section className="about">
      <h2><Trans>label.perso.about</Trans></h2>
      <p><Trans>{bio}</Trans></p>
    </section>
  )
}

export default About;