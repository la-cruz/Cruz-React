import React from 'react';
import SlickLink from '../Basic/SlickLink'

function Features({data}) {
    return (
        <div className="features">
            <h2>Fonction<strong>nalités</strong></h2>
            <SlickLink data={data} type="feature"/>
        </div>
    );
}

export default Features;