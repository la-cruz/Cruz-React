import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import ExperienceCard from './ExperienceCard'

function Experiences({ experiences }) {

    const [groupedExp, setGroupedExp] = useState([])
    var tempExp = null
    var tempGroupedExp = []

    useEffect(() => {
        for(var i = 0; i < experiences.length; i+=2) {    
            tempExp = experiences[i + 1] ? experiences[i + 1] : null
            tempGroupedExp.push([experiences[i], tempExp])
        }

        setGroupedExp(tempGroupedExp)
    }, [])

    return (
        <section className="experiences">
            <h2 data-aos="fade-in"><Trans>label.perso.experiences</Trans></h2>
            {
                groupedExp.map(([exp1, exp2]) => (
                    <div className="experiences-row" key={`${exp1.title}`}>
                        <ExperienceCard data={exp1} first/>
                        {
                            exp2 &&
                            <ExperienceCard data={exp2} />
                        } 
                    </div>
                ))
            }
        </section>
    )
}

export default Experiences