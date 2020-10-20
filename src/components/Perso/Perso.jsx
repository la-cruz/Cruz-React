import React, { useRef } from 'react'
import About from './About'
import Presentation from './Presentation'
import Studies from './Studies'
import Experiences from './Experiences'
import RelatedProject from './RelatedProject'
import RelatedTools from './RelatedTools'
import { Helmet } from "react-helmet"
import i18n from 'i18next';

import getRelatedProject from '../../lib/getRelatedProject'

function Perso({ data }) {
    const refToScroll = useRef(null);
    const language = i18n.language;

    const scrollToRef = () => {
        refToScroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    const t = language === 'fr' ? i18n.getFixedT('fr') : i18n.getFixedT('en');
    const title = data.firstname + " " + data.name.toUpperCase() + " - " + t(data.metier);
    const description = i18n.t(data.bio).replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
                <meta name="description" content={description} />
            </Helmet>

            <Presentation data={data} scrollToRef={scrollToRef} />
            <About bio={data.bio} ref={refToScroll} />
            <Studies studies={data.studies} />
            <Experiences experiences={data.experiences} />
            <RelatedProject projects={getRelatedProject(data.projects)} />
            <RelatedTools title="label.perso.technologies" data={data.technologies} skew />
            <RelatedTools title="label.perso.tools" data={data.tools} />
            {/* <RelatedSkills skills={data.qualities} /> */}
        </>
    )
}

export default Perso;