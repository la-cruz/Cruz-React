import React from 'react';
import Presentation from './Presentation';
import Features from './Features';
import Technologies from './Technologies';
import Team from './Team';

function Project( {data} ) {   
    return (
        <div className="project">
            <Presentation data={data.presentation} />
            <Features data={data.features} />
            <Technologies data={data.technologies} />
            <Team data={data.team} />
        </div>
    );
};

export default Project;