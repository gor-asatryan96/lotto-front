import React from 'react'

const NoGamerItem = React.memo(({languageData}) => {
    return (
        <div className='gamerItemContainer'>
            <div className='noGamer'>{languageData.NoTickets}</div>
        </div>
    )
})

export default NoGamerItem
