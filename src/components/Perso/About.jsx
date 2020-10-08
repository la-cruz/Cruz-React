import React, { forwardRef } from 'react'
import { Trans } from 'react-i18next'

const About = forwardRef( ({bio}, ref) => (
  <section className="about-perso" ref={ref}>
      <h2 className="wow fadeIn"><Trans>label.perso.about</Trans></h2>
      <p className="wow fadeIn"><Trans>{bio}</Trans></p>
  </section>
));

export default About;