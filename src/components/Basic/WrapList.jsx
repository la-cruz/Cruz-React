import React from 'react';

function WrapList({data}) {
  
    const getImage = (name) => {
      var img;

      try {
        img = require('../../assets/images/tools/' + name.toLowerCase() + '.svg')
      } catch {
        try {
            console.log(name.toLowerCase());
          img = require('../../assets/images/tools/' + name.toLowerCase() + '.png')
        } catch (e) {
          console.error(e)
          console.log("No image for ", name.toLowerCase())
        }
      }

      return img
    }

    return (
        <div className="container-wrap-list">
            {
                data.map( (technology, i) => (
                    <div data-aos="flip-up" className='wrap-list-elem' key={`${technology}-${i}`}>
                      <h5>{technology}</h5>
                      <img className="logo-tools" src={getImage(technology)} alt={`img-techno ${technology}`} />
                    </div>
                ))
            }
        </div>
    );
}

export default WrapList;