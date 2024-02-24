import React from 'react'
import '../../App.css'
import ball from "../../../assets/images/ball2.png"

const BallItem = React.memo(({ballImageClass, ballNumberClass, num}) => {
    return (
        <div className='ballContainer'><img src={ball} alt='ball' className={ballImageClass} /><div className={ballNumberClass}>{num}</div> </div>
    )
})

export default BallItem
