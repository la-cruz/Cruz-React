import React from 'react';
import { Trans } from 'react-i18next';
import SlickLink from '../Basic/SlickLink'

function Team({data}) {
    return (
        <div className="team">
            <h2><Trans>label.project.team</Trans></h2>
            <SlickLink data={data} type="member"/>
        </div>
    );
}

export default Team;