import React from 'react'
import { Trans } from 'react-i18next'

function Studies({ studies }) {
  return (
    <section className="studies">
      <h2><Trans>label.perso.studies</Trans></h2>
      <div className="studies-content">
        <div className="roadmap">

        </div>
        {
          studies.map(study => (
            <article className="studies-elem" key={study.title}>
              <div className="studies-info">
                <h3><Trans>{study.title}</Trans></h3>
                <p><Trans>{study.date}</Trans> - <Trans>{study.location}</Trans></p>
                {
                  study.list != [] &&
                  <ul>
                    {
                      study.list.map(elem => (
                        <li key={`studies-${elem}`}><Trans>{elem}</Trans></li>
                      ))
                    }
                  </ul>
                }
              </div>
              {/* <img src={`../../assets/images/schools/${study.logo}`} /> */}
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Studies;