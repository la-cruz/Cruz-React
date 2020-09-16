import React from 'react'
import MemberCard from './MemberCard'
import team from "../../data/team.json"

function Team() {
    return (
        <section className="main-squad">
            <h2 className="wow fadeInUp"> NOTRE 
                <span className="stroke-text"> ÉQUIPE</span>
            </h2>
            <section className="squad">
                {
                    team.map(member => (
                        <MemberCard data={member}/>
                    ))
                }
            </section>
        </section>
    )
}

export default Team