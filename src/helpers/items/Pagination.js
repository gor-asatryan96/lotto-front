import React from 'react'
import arrowBack from '../../assets/images/arrowBack.svg'
import arrowNext from '../../assets/images/arrowNext.svg'

const Pagination = React.memo(({pagesCount, togglePage, page}) => {

    let pages = []
    if(pagesCount > 0 && pagesCount < 8) {
        for (let i = 1; i <= pagesCount + 1 ; i++) {
            pages.push(i)
            
        }
    }

    return (
        <div className='paginationContainer'>
            {page !== 0 && <div onClick={() => togglePage(prev => prev - 1)} className='paginationItem PaginationArrowItem'><img className='paginationArrow' src={arrowBack} alt='arrow' /></div>}

            {/* if pagesCount < 8 ------- */}
            {pagesCount < 8 && !!pages.length && pages.map(p => {
                return <div onClick={() => togglePage(p-1)} className={page === p - 1 ? 'paginationItem activePage' : 'paginationItem'}>{p}</div>
            })}

            {/* if pagesCount >= 8 ------- */}
            {pagesCount >= 8 && 
            <><div onClick={() => togglePage(0)} className={page === 0 ? 'paginationItem activePage' : 'paginationItem'}>1</div>
            {page > 3 && <div className='paginationItem' style={{cursor: 'unset'}}>...</div>}
            {page <= 3 &&  <div onClick={() => togglePage(1)} className={page === 1 ? 'paginationItem activePage' : 'paginationItem'}>2</div>}

            {page <= 3 && <>
            <div onClick={() => togglePage(2)} className={page === 2 ? 'paginationItem activePage' : 'paginationItem'}>3</div>
            <div onClick={() => togglePage(3)} className={page === 3 ? 'paginationItem activePage' : 'paginationItem'}>4</div>
            <div onClick={() => togglePage(4)} className={page === 4 ? 'paginationItem activePage' : 'paginationItem'}>5</div>
            </>}

            {page > 3 && page <= pagesCount - 4 && <>
            <div className='paginationItem' onClick={() => togglePage(prev => prev - 1)}>{page}</div>
            <div className='paginationItem activePage'>{page + 1}</div>
            <div className='paginationItem' onClick={() => togglePage(prev => prev + 1)}>{page + 2}</div></>}

            {page > pagesCount - 4 && <>
            <div onClick={() => togglePage(pagesCount - 4)} className={page === pagesCount - 4 ? 'paginationItem activePage' : 'paginationItem'}>{pagesCount - 3}</div>
            <div onClick={() => togglePage(pagesCount - 3)} className={page === pagesCount - 3 ? 'paginationItem activePage' : 'paginationItem'}>{pagesCount - 2}</div>
            <div onClick={() => togglePage(pagesCount - 2)} className={page === pagesCount - 2 ? 'paginationItem activePage' : 'paginationItem'}>{pagesCount - 1}</div>
            </>}

            {page <= pagesCount - 4 && <div className='paginationItem' style={{cursor: 'unset'}}>...</div>}
            {page > pagesCount - 4 && <div onClick={() => togglePage(pagesCount - 1)} className={page === pagesCount - 1 ? 'paginationItem activePage' : 'paginationItem'}>{pagesCount}</div>}
            <div onClick={() => togglePage(pagesCount)} className={page === pagesCount ? 'paginationItem activePage' : 'paginationItem'}>{pagesCount + 1}</div>
            </>}


            {page !== pagesCount && <div onClick={() => togglePage(prev => prev + 1)} className='paginationItem PaginationArrowItem'><img className='paginationArrow' src={arrowNext} alt='arrow' /></div>}
        </div>
    )
})

export default Pagination
