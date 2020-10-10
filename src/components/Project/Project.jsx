import React, { useRef } from 'react';
import Presentation from './Presentation';
import Features from './Features';
import Technologies from './Technologies';
import Team from './Team';
import { Helmet } from "react-helmet";

function Project( {data} ) {   
    const refToScroll = useRef(null);

    const scrollToRef = () => {
        refToScroll.current.scrollIntoView({behavior: 'smooth'})
    }

    const title = data.presentation.route + " | LA CRUZ";

    return (
        <div className="project">
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
            </Helmet>

            <Presentation data={data.presentation} scrollToRef={scrollToRef} />
            <Features data={data.features} ref={refToScroll} />
            <Technologies data={data.technologies} />
            <Team data={data.team} />
        </div>
    );
};

export default Project;