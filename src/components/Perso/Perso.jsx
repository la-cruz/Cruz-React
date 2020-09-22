import React from 'react'
import About from './About'
import Presentation from './Presentation'
import Studies from './Studies'
import Experiences from './Experiences'
import RelatedProject from './RelatedProject'
import RelatedTechno from './RelatedTechno'
import RelatedTools from './RelatedTools'
import RelatedSkills from './RelatedSkills'

function Perso({ data }) {
  return (
      <>
        <Presentation data={data} />
        <About bio={data.bio} />
        <Studies studies={data.studies} />
        <Experiences experiences={data.experiences} />
        <RelatedProject />
        <RelatedTechno />
        <RelatedTools />
        <RelatedSkills />
      </>
  )
}

export default Perso;