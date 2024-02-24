import React, { useState, useRef, useCallback } from "react";
import "../App.css";
import { instance } from "../../Api/Api";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import AllGamesPopup from "./AllGamesPopup";

const AllGamesPopupContainer = React.memo(({
  togglePopup, activeGameId, allGamers, languageData, historyWinnerBalls, waitingCurrentWinnerBalls, isWaitingGameActive
}) => {

    const [gamersItems, setGamersItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [number, setNumber] = useState("");
    const [inputNumber, setInputNumber] = useState('')
    const [page, setPage] = useState(0)
    const isSearchDissable =  (inputNumber.length < 7 && inputNumber.length > 0) || inputNumber.length > 9 

    const fetchTickets = async () => {
      if(!number) {
      const res = await instance.post("get-tickets", {
        client: "PMBETTZ",
        draw_id: activeGameId,
        page_number: page,
        // jackpot: isJackpotActive,
      }).then(res => res.data).catch(()=> {})
      return res
    }
    if(number) {
      const res = await instance.post("get-tickets-by-number", {
        client: "PMBETTZ",
        draw_id: activeGameId,
        // jackpot: isJackpotActive,
        phone_number: `255${number}`,
        page_number: page,
      }).then(res => res.data).catch(()=> {})
      return res
    }
    }

    const { scrollLoading, hasMore, setHasMore } = useInfiniteScroll(
      page,
      fetchTickets,
      setGamersItems,
      setIsLoading,
      number
    );

    // last item refs ---
    const pageObserver = useRef()
    const lastTicketRef = useCallback(node => {
      if(scrollLoading) return
      if(pageObserver.current) pageObserver.current.disconnect()
      pageObserver.current = new IntersectionObserver(e => {
        if(e[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1)
        }
      })
      if(node){
        pageObserver.current.observe(node)
      }
    }, [scrollLoading, hasMore])
    // -----------------------------

    const searchTickets = async () => {
      if(inputNumber === number || isSearchDissable) {
        return
      }
      setIsLoading(true);
      if (!inputNumber.trim()) {
        setNumber('')
        setPage(0)
        return;
      }
      setGamersItems([])
      setHasMore(true)
      setPage(0)
      setNumber(inputNumber)
    };
    const pressEnterKey = (e) => {
      if(isLoading) {
        return
      }
      if (e.key === "Enter") {
        searchTickets();
      }
    };

    const changeNumber = (e) => {
      if(isLoading) {
        return
      }
      const re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        setInputNumber(e.target.value);
      }
    };
  

    return (
     <AllGamesPopup togglePopup={togglePopup} activeGameId={activeGameId} allGamers={allGamers} languageData={languageData}
     gamersItems={gamersItems} isLoading={isLoading} changeNumber={changeNumber} pressEnterKey={pressEnterKey} 
     searchTickets={searchTickets} lastTicketRef={lastTicketRef} inputNumber={inputNumber} scrollLoading={scrollLoading}
     setInputNumber={setInputNumber} isSearchDissable={isSearchDissable} historyWinnerBalls={historyWinnerBalls}
     waitingCurrentWinnerBalls={waitingCurrentWinnerBalls} isWaitingGameActive={isWaitingGameActive} />
    );
  }
);



export default AllGamesPopupContainer;
