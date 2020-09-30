import React, { useRef } from 'react';
import Presentation from './Presentation';
import Features from './Features';
import Technologies from './Technologies';
import Team from './Team';

function Project( {data} ) {   
    const refToScroll = useRef(null);

    const scrollToRef = () => {
        refToScroll.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="project">
            <Presentation data={data.presentation} scrollToRef={scrollToRef} />
            <Features data={data.features} ref={refToScroll} />
            <Technologies data={data.technologies} />
            <Team data={data.team} />
        </div>
    );
};

export default Project;