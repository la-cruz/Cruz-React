import React from 'react'

function RoadMap({ studies }) {
  return (
    <div className="roadmap">
        {
          studies.map((_, index) => (
            <React.Fragment key={`roadmap-point-${index}`}>
              <div className="roadmap-point">
                {
                  index === 0 ?
                  <i className="fas fa-flag"></i> :
                  <i className="fas fa-map-marker-alt"></i> 
                }
              </div>
              {
                index !== studies.length - 1 &&
                <svg width="30%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <line x1="50%" y1="10%" x2="50%" y2="95%" />
                </svg>
              }
            </React.Fragment>
          ))
        }
    </div>
  )
}

export default RoadMap