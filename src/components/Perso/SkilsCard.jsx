import React from 'react'
import { Trans } from 'react-i18next'

function SkillsCard({ skill }) {

  // var image = skill.image != "" ? require(`../../assets/images/skills/${skill.image}`) : ""

  return (
    <div className="skills-card">
      {/* <img src={image} /> */}
      <h4><Trans>{skill.title}</Trans></h4>
    </div>
  )
}

export default SkillsCard