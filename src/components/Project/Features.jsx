import React from 'react';

function Features({data}) {
    return (
        <div className="features">
            <h2>Fonctionnalités</h2>
            {
                data.map((elem, i) => (
                    <div className="card-feature" key={i}>
                        {/* TODO: ADDED IMG TO ASSETS & DELETE CONDITION */}
                        <img src={elem.image === "" ? "https://via.placeholder.com/50x100" : elem.image} alt="img-card" />
                        <h3> {elem.title_fr} </h3>
                        <p> {elem.description_fr} </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Features;