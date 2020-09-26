import React from 'react';
import { Trans } from 'react-i18next';
import WrapList from '../Basic/WrapList';

function Technologies({data}) {
    return (
        <div className="technologies">
            <h2><Trans>label.project.technologies</Trans></h2>
            <WrapList data={data} />
        </div>
    );
}

export default Technologies;