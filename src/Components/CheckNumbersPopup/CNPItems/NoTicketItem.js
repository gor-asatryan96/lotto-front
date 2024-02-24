import React from 'react'

const NoTicketItem = ({draw, languageData}) => {
    return (
        <div className="noTicketsContainer">
            <div className='noTickets'>{draw ? languageData.NoDraws: languageData.NoTickets}</div>
        </div>
    )
}

export default NoTicketItem
