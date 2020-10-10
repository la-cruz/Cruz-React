import React from 'react'
import MemberCard from './MemberCard'
import team from "../../data/team.json"
import { Helmet } from "react-helmet"
import { Trans } from 'react-i18next'
import i18n from 'i18next';

function Team() {
    const language = i18n.language;
    const title = (language === "fr" ? "Équipe" : "Team") + " | LACRUZ";
    return (
        <section className="main-squad">
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
            </Helmet>
            <h2 data-aos="fade-up"><Trans>label.team.title</Trans>
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