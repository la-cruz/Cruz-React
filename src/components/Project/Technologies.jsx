import React from 'react';
import WrapList from '../Basic/WrapList';

function Technologies({data}) {
    return (
        <div className="technologies">
            <h2>Techno<strong>logies</strong></h2>
            <WrapList data={data} />
        </div>
    );
}

export default Technologies;