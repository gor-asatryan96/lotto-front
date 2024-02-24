import { useState, useEffect } from "react"


const useInfiniteScroll = (page, fetchTcikets, setGamersItems, setIsLoading, number, selectedButton) => {

    const [scrollLoading, setScrollLoading] = useState(false)
    const [scrollError, setScrollError] = useState(false)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        let _isMounted = true
        // if(page === 0) {
        //     return
        // }
        if(page !== 0) {
            setScrollLoading(true)
        }
        setScrollError(false)
        fetchTcikets().then(res => {
            if(_isMounted) {
            const historyItems = res.tickets.map(item => {
                let date = item.date.split(/[- :]/);
      
                let safariDate = new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
                return {...item, date: safariDate}
              })
            setGamersItems(prevGamers=> [...prevGamers, ...historyItems])
            setHasMore(res.ticketsCount > page * 20 + 20)
            setScrollLoading(false)
            setIsLoading(false)
            }
        }).catch(e => {
            console.error(e)
            setScrollError(true)
        })
        return () => {
            _isMounted = false
        }
        // eslint-disable-next-line
    }, [page, number, selectedButton])

    return {
        scrollLoading,
        scrollError,
        hasMore,
        setHasMore
    }
}

export default useInfiniteScroll