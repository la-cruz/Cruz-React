import React from 'react';

function WrapList({data}) {
    return (
        <div className="container-wrap-list">
            {
                data.map( (technology, i) => (
                    <img className="logo-tools" src={require('../../assets/images/tools/' + technology.toLowerCase() + ".svg")} alt="img-techno" key={i} />
                ))
            }
        </div>
    );
}

export default WrapList;