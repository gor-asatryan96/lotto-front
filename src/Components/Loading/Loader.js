import React from 'react'
import './Loader.css'

const Loader = React.memo(({spiner}) => {
    return (
        <div className="loaderBackground">
          {spiner && <div className="loader">
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </div>}
        </div>
    )
})

export default Loader
