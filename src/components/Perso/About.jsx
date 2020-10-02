import React, { forwardRef } from 'react'
import { Trans } from 'react-i18next'

const About = forwardRef( ({bio}, ref) => (
  <section className="about-perso" ref={ref}>
      <h2><Trans>label.perso.about</Trans></h2>
      <p><Trans>{bio}</Trans></p>
  </section>
));

export default About;