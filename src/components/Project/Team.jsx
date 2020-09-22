import React from 'react';
import SlickLink from '../Basic/SlickLink'

function Team({data}) {
    return (
        <div className="team">
            <h2>Équ<strong>ipe</strong></h2>
            <SlickLink data={data} type="member"/>
        </div>
    );
}

export default Team;