import React from 'react'
import About from './About'
import Presentation from './Presentation'
import Studies from './Studies'
import Experiences from './Experiences'
import RelatedProject from './RelatedProject'
import RelatedTools from './RelatedTools'
import RelatedSkills from './RelatedSkills'

import getRelatedProject from '../../lib/getRelatedProject'

function Perso({ data }) {
  return (
      <>
        <Presentation data={data} />
        <About bio={data.bio} />
        <Studies studies={data.studies} />
        <Experiences experiences={data.experiences} />
        <RelatedProject projects={getRelatedProject(data.projects)} />
        <RelatedTools title="label.perso.technologies" data={data.technologies} skew/>
        <RelatedTools title="label.perso.tools" data={data.tools} />
        <RelatedSkills skills={data.qualities} />
      </>
  )
}

export default Perso;