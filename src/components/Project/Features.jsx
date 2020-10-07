import React, { forwardRef } from 'react';
import { Trans } from 'react-i18next';
import SlickLink from '../Basic/SlickLink'

const Features = forwardRef( ({data}, ref) => (
    <div className="features" ref={ref}>
        <h2 classsName="wow fadeIn"><Trans>label.project.features</Trans></h2>
        <SlickLink data={data} type="feature"/>
    </div>
));

export default Features;