import React from 'react'
import { Trans } from 'react-i18next'
import WrapList from '../Basic/WrapList'

function RelatedTools({ title, data, skew }) {

  var classname = skew ? "related-tools skew" : "related-tools";

  return (
    <section className={classname}>
      <h2><Trans>{title}</Trans></h2>
      <WrapList data={data}/>
    </section>
  )
}

export default RelatedTools