import React, { useState, useRef, useCallback } from "react";
import "../App.css";
import close from "../../assets/images/closeWhite.png";
import searchIcon from "../../assets/images/searchIcon.png";
import timeLogo from "../../assets/images/history.png";
import CNPItem from "./CNPItems/CNPItem";
import NoTicketItem from "./CNPItems/NoTicketItem";
import { instance } from "../../Api/Api";
import Loader from "../Loading/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import ScrollLoader from "../Loading/ScrollLoader";
import { v4 as uuidv4 } from 'uuid'


const CheckNumbersPopup = React.memo((props) => {

  const [ticketItems, setTicketItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [number, setNumber] = useState(props.checkNumber)
  const [inputNumber, setInputNumber] = useState(props.checkNumber)
  const [page, setPage] = useState(0)
  const isSearchDissable = !inputNumber || inputNumber.length < 7 || inputNumber.length > 9


  const [selectedButton, setSelectedButton] = useState(props.selectedDrawData.drawId ? props.selectedDrawData.drawId : props.selectedDrawData.week ? props.languageData.CurrentWeek : props.languageData.LastWeek)


  const fetchTickets = async () => {
    const res = instance.post('get-tickets-by-number', {
      "client": "PMBETTZ",
      "draw_id": typeof(selectedButton) === 'number' ? props.selectedDrawData.drawId : false,
      // "jackpotIncluded": false,
      "phone_number": `255${number}`,
      "page_number": page,
      "week": typeof(selectedButton) !== 'number' ? selectedButton === 'Current Week' ? 'current' : 'last' : false
    }).then(res => res.data).catch(() => {})
    return res
  }

  const { scrollLoading, hasMore, setHasMore } = useInfiniteScroll(
    page,
    fetchTickets,
    setTicketItems,
    setIsLoading,
    number,
    selectedButton
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


  const changeNumber = (e) => {
    if(isLoading) {
      return
    }
    const re = /^[0-9\b]+$/
    if(e.target.value === '' || re.test(e.target.value)){
      setInputNumber(e.target.value)
    }
    
  }

  const pressEnterKey = (e) => {
    if(isLoading) {
      return
    }
    if(e.key === "Enter") {
      searchTickets()
    }
  }


  const searchTickets = async () => {
    if(isSearchDissable) {
      return
    }
    if(number === inputNumber) {
      return
    }
    setTicketItems([])
    setPage(0)
    setHasMore(true)
    setNumber(inputNumber)
    setIsLoading(true)
  }

  const toggleSelectedButton = async (selected) => {
    if(!number || selectedButton === selected || isSearchDissable) {
      return
    }
    setNumber(inputNumber)
    setIsLoading(true)
    setHasMore(true)
    setTicketItems([])
    setPage(0)
    setSelectedButton(selected)
  }


  return (
    <>
      <div onClick={() => props.togglePopup(false)} className="popupBackground"></div>
      <div className="allGamesBody">
        <div className="allGamesHeader">
          <div className="allGamesNavContainer">
            <div className="allGamesNavItem">
              <span className="checkYourNumbersText">{props.languageData.CheckYourNumbers}</span>
            </div>
          </div>
          <div onClick={() => props.togglePopup(false)}>
            <img className="closeIcon" src={close} alt="close" />
          </div>
        </div>
        <div className="chechNumberPopupBody">
        <div style={{ position: "relative", height: "100%" }}>
            {isLoading && <Loader spiner="true" />}
          <div className="allGamesSearchNumberText">
            {props.languageData.SearchNumber}
          </div>
          <div className="CNPInputField">
            <div className="phoneIndex">(+255)</div>
            <div className="phoneNumberVerticalLine" />
            <div className="CNPInputContainer">
              <input value={inputNumber} onChange={changeNumber} onKeyPress={pressEnterKey} maxLength={9}
                      className="phoneNumberIpnut" type='tel'  pattern="[0-9]" />
            </div>
            {!!inputNumber && <div onClick={() => setInputNumber('')} className='clearInput'>
            <p>&#10006;</p>
          </div>}
            {!!!isSearchDissable && <div className="searchIconContainer" onClick={searchTickets}>
              <img src={searchIcon} alt="search" className="searchIcon" />
            </div>}
          </div>
          <div className="checkYourNumberPopupNav">
            {props.selectedDrawData.drawId && <button onClick={() => toggleSelectedButton(props.selectedDrawData.drawId)} className={!!!isSearchDissable ? typeof(selectedButton) === 'number' ? "checkYourNumberPopupNavItem CYNActivNavItem" :  'checkYourNumberPopupNavItem' : 'checkYourNumberPopupNavItem searchButtonDisabled'}>
              <div>{props.languageData.Draw}: {props.selectedDrawData.drawId ? props.selectedDrawData.drawId : 'None'}</div>
            </button>}
            <button  onClick={() => toggleSelectedButton(props.languageData.CurrentWeek)} className={ !!!isSearchDissable ? selectedButton === props.languageData.CurrentWeek ? "checkYourNumberPopupNavItem CYNActivNavItem" : 'checkYourNumberPopupNavItem' : 'checkYourNumberPopupNavItem searchButtonDisabled'}>
              <div>
                <img className="timeLogo" src={timeLogo} alt="time" />
              </div>
              <div>{props.languageData.CurrentWeek}</div>
            </button>
            <button  onClick={() => toggleSelectedButton(props.languageData.LastWeek)} className={!!!isSearchDissable ? selectedButton === props.languageData.LastWeek ?  "checkYourNumberPopupNavItem CYNActivNavItem" : 'checkYourNumberPopupNavItem' : 'checkYourNumberPopupNavItem searchButtonDisabled'}>
              <div>
                <img className="timeLogo" src={timeLogo} alt="time" />
              </div>
              <div>{props.languageData.LastWeek}</div>
            </button>
          </div>
          <div className="gamersBoardPopup">
            <div className="CNPHeader">
              <div>{props.languageData.Time}</div>
              <div>{props.languageData.Bet}</div>
              <div>{props.languageData.Combination}</div>
              <div>{props.languageData.Status}</div>
            </div>
            <div className="CNPGames">
              <ErrorBoundary>
             {ticketItems && !!ticketItems.length 
             ? ticketItems.map((item, index) => {
               if(ticketItems.length === index + 1) {
                 return <CNPItem ticketRef={lastTicketRef} data={item} key={uuidv4()} languageData={props.languageData} />
               } else {
               return <CNPItem data={item} key={uuidv4()} languageData={props.languageData} />
               }
             })
            : <NoTicketItem languageData={props.languageData} />}
            </ErrorBoundary>
            {scrollLoading && <div className='seeAllGamersScrollLoading'><ScrollLoader colorChange='true' /></div>}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
});

export default CheckNumbersPopup;