import React, { useRef } from 'react'
import About from './About'
import Presentation from './Presentation'
import Studies from './Studies'
import Experiences from './Experiences'
import RelatedProject from './RelatedProject'
import RelatedTools from './RelatedTools'
import RelatedSkills from './RelatedSkills'
import { Helmet } from "react-helmet"

import { useTranslation } from "react-i18next";


import getRelatedProject from '../../lib/getRelatedProject'

function Perso({ data }) {
    const refToScroll = useRef(null);

    const scrollToRef = () => {
        refToScroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    const { t, i18n } = useTranslation();
    const title = data.firstname + " " + data.name.toUpperCase() + " - " + t(data.metier);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
            </Helmet>

            <Presentation data={data} scrollToRef={scrollToRef} />
            <About bio={data.bio} ref={refToScroll} />
            <Studies studies={data.studies} />
            {/* <Experiences experiences={data.experiences} /> */}
            <RelatedProject projects={getRelatedProject(data.projects)} />
            <RelatedTools title="label.perso.technologies" data={data.technologies} skew />
            <RelatedTools title="label.perso.tools" data={data.tools} />
            <RelatedSkills skills={data.qualities} />
        </>
    )
}

export default Perso;