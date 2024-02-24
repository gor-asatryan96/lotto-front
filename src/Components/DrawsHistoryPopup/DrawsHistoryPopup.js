import React, { useState, useEffect } from "react";
import "../App.css";
import close from "../../assets/images/closeWhite.png";
import searchIcon from "../../assets/images/searchIcon.png";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NoTicketItem from "../CheckNumbersPopup/CNPItems/NoTicketItem";
import DrawItem from "./items/DrawItem";
import Pagination from "../../helpers/items/Pagination";
import Loader from "../Loading/Loader";
import { instance } from "../../Api/Api";
import { variables } from "../../helpers/Constants";

const DrawsHistoryPopup = React.memo(({ togglePopup, languageData, fetchDraws }) => {

  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [pagesCount, setPagesCount] = useState('')
  const [drawItems, setDrawItems] = useState(null)
  const [draw, setDraw] = useState('')
  const [inputDraw, setInputDraw] = useState('')
  const [currentDraw, setCurrentDraw] = useState('')

  useEffect(() => {
    if(page || page === 0) {
    setIsLoading(true)
    fetchDraws(page).then(res => {
      if(page === 0) {
        const allDraws = res.allDraws
        allDraws.shift()
        setDrawItems(allDraws)
      } else {
        setDrawItems(res.allDraws)
      }
      setDrawItems(res.allDraws)
      setPagesCount(res.pagesCount)
      setIsLoading(false)
    }).catch(() => {})
  }
    // eslint-disable-next-line
  }, [page])

  useEffect(() => {
    let _isMounted = true
    if(!!draw) {
      setIsLoading(true)
      instance.post('get-draws-combination', {
      "client": variables.client,
      "drawId": draw
    }).then(res => {
      if(_isMounted) {
      if(res.data.error) {
        setPage('')
      setDrawItems('')
      setCurrentDraw('')
      setIsLoading(false)
      } else {
      setCurrentDraw(res.data)
      setPage('')
      setIsLoading(false)
      }
    }
      
    }).catch(() => {
      setPage('')
      setDrawItems('')
      setCurrentDraw('')
      setIsLoading(false)
    }) 
    
    }
    return () => {
      _isMounted = false
    }
    

  }, [draw])

  const changeNumber = (e) => {
    if(isLoading) {
      return
    }
    const re = /^[0-9\b]+$/
    if(e.target.value === '' || re.test(e.target.value)){
      setInputDraw(e.target.value)
    }
    
  }

  const pressEnterKey = (e) => {
    if (isLoading) {
      return
    }
    if(e.key === "Enter") {
      searchDraw()
    }
  }

  const searchDraw =  () => {
    if(draw === inputDraw) {
      return
    }else if(!inputDraw) {
      setCurrentDraw('')
      setPage(0)
      setDraw('')
    } else {
      setDraw(inputDraw)
    }
    

  }

  return (
    <>


      <div onClick={() => togglePopup(false)} className="popupBackground"></div>
      <div className="allGamesBody">
            {isLoading && <Loader spiner="true" />}
        <div className="allGamesHeader">
          <div className="allGamesNavContainer">
            <div className="allGamesNavItem">
              <span className="checkYourNumbersText">{languageData.DrawHistory}</span>
            </div>
          </div>
          <div onClick={() => togglePopup(false)}>
            <img className="closeIcon" src={close} alt="close" />
          </div>
        </div>
        <div className="numberSearchBar">
          <div className="checkNumberBoards">
            <div className="allGamesSearchNumberText">
              {languageData.SearchDraw}
            </div>
            <div className="checkNumberFields">
              <div className="searchNumberInputContainer">
                <input
                  value={inputDraw}
                  onChange={changeNumber}
                  onKeyPress={pressEnterKey}
                  className="phoneNumberIpnut"
                  type="tel"
                  maxLength={9}
                  pattern="[0-9]"
                ></input>
              </div>
              {!!inputDraw && (
                    <div
                      onClick={() =>  setInputDraw("")}
                      className="clearInput"
                    >
                      <p>&#10006;</p>
                    </div>
                  )}
              <div onClick={searchDraw} className="searchIconContainer">
                <img src={searchIcon} alt="search" className="searchIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="drawsBoardHeader colorChange">
            <div>{languageData.Draw}</div>
            <div>{languageData.Date}</div>
            <div>{languageData.Time}</div>
            <div>{languageData.Combination}</div>
          </div>
        <div className="popupContent">
            <ErrorBoundary>
              {drawItems && !currentDraw && !!drawItems.length && drawItems.map((draw, i) => {
                return <DrawItem key={draw.drawId} data={draw} />
              })}
            </ErrorBoundary>
            {!!currentDraw && <DrawItem  data={currentDraw} />}
            {!currentDraw && !drawItems && <NoTicketItem draw={true} languageData={languageData} />}
        </div>
        {pagesCount && !currentDraw && !!drawItems && <Pagination page={page} togglePage={setPage} pagesCount={pagesCount} />}
      </div>
    </>
  );
});

export default DrawsHistoryPopup;
