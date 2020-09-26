import React from 'react';
import { Trans } from 'react-i18next';
import SlickLink from '../Basic/SlickLink'

function Features({data}) {
    return (
        <div className="features">
            <h2><Trans>label.project.features</Trans></h2>
            <SlickLink data={data} type="feature"/>
        </div>
    );
}

export default Features;