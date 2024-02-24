import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import HowToPlay from "./HowToPlay/howToPlay";
import AllGamesPopupContainer from "./AllGamesPopup/AllGamesPopupContainer";
import SelectDrawPopup from "./SelectDrawPopup/SelectDrawPopup";
import CheckNumbersPopup from "./CheckNumbersPopup/CheckNumbersPopup";
import { gameTypes, languageTypes, variables } from "../helpers/Constants";
import {  getLanguageData, getContent, getMounts } from "../assets/Languages/Languages";
import TermsOfUsePopup from "./TermsOfUsePopup/TermsOfUsePopup";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup/PrivacyPolicyPopup";
import { instance } from "../Api/Api";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import DrawsHistory from "./DrawsHistoryPopup/DrawsHistoryPopup";
import { getBanners } from "../assets/banners/banners";
import { getOperatorContents } from "../helpers/items/items";
import { NAVBAR_NAMES } from "../constants/names";
import { fakeDailyHistory, fakeWeeklyHistory } from "../fakeData";
export const timerContext = React.createContext(null);


function App() {

  // Popups ---
  const [isHowToPlayActive, setIsHowToPlayActive] = useState(false)
  const [isAllGamesPopupActive, setIsAllGamesPopupActive] = useState(false)
  const [isSelectDrawPopupActive, setIsSelectDrawPopupActive] = useState(false)
  const [isCheckNumberPopupActive, setIsCheckNumberPopupActive] = useState(false)
  const [checkNumber, setCheckNumber] = useState(localStorage.number || '')
  const [isTermsOfUsePopupActive, setIsTermsOfUsePopupActive] = useState(false)
  const [isDrawsHistoryPopupActive, setIsDrawsHistoryPopupActive] = useState(false)
  const [isPrivacyPolicyPopupActive, setIsPrivacyPolicyPopupActive] = useState(false)
  const isBodyLock = isHowToPlayActive || isAllGamesPopupActive || isSelectDrawPopupActive || 
  isCheckNumberPopupActive || isTermsOfUsePopupActive || isPrivacyPolicyPopupActive || isDrawsHistoryPopupActive
  // count down timers ---
  const [currentTime, setCurrentTime] = useState('')
  const [currentTimer, setCurrentTimer] = useState('')
  // const [jackpotTime, setJackpotTime] = useState('')
  // const [jackpotTimer, setJackpotTimer] = useState('')
  // winner balls ---
  const [historyWinnerBalls, setHistoryWinnerBalls] = useState([]);
  const [waitingCurrentWinnerBalls, setWaitingCurrentWinnerBalls] = useState([]);
  // const [waitingJackpotWinnerBalls, setWaitingJackpotWinnerBalls] = useState([]);
  // loadings ---
  const [isHistoryBlockLoading, setIsHistoryBlockLoading] = useState(true)
  const [isGameLoading, setIsGameLoading] = useState(true)
  // items ---
  const [gamersItems, setGamersItems] = useState([])
  const [currentDrawItems, setCurrentDrawItems] = useState([])
  // const [jackpotDrawItems, setJackpotDrawItems] = useState([])
  // const [winnerItems, setWinnerItems] = useState([])
  // const [waitingWinnerItems, setWaitingWinnerItems] = useState(null)
  const [allGamers, setAllGamers] = useState(null)
  const [selectedDrawData, setSelectedDrawData] = useState(null)
  // Main ---
  // const [jackpotAmount, setJackpotAmount] = useState('')
  const [activeGame, setActiveGame] = useState(CURRENT)
  const [activeLanguage, setActiveLanguage] = useState(EN)
  const [languageData, setLanguageData] = useState(null)
  const [banners, setBanners] = useState(null)
  const [TermsContent, setTermsContent] = useState(null)
  const [PrivacyContent, setPrivacyContent] = useState(null)
  const [HowToPlayContent1, setHowToPlayContent1] = useState(null)
  const [HowToPlayContent2, setHowToPlayContent2] = useState(null)
  const [operatorContents, setOperatorContents] = useState(null)
  const [mounts, setMounts] = useState(null)
  const [activeMenu, setActiveMenu] = useState(NAVBAR_NAMES.NOW)
  const body = document.querySelector('body');
  // draw id ---
  const [activeGameId, setActiveGameId] = useState('')
  const [waitingCurrentGameId, setWaitingCurrentGameId] = useState('')
  // const [waitingJackpotGameId, setWaitingJackpotGameId] = useState('')

  // started games ---
  const [isCurrentGameStarted, setIsCurrentGameStarted] = useState(false);
  // const [isJackpotGameStarted, setIsJackpotGameStarted] = useState(false);
  // animation ---
  const [isCurrentAnimationActive, setIsCurrentAnimationActive] = useState(false)
  // const [isJackpotAnimationActive, setIsJackpotAnimationActive] = useState(false)
  const [isNoMoreBetsActive, setIsNoMoreBetsActive] = useState(false)
  const [timeDifference, setTimeDIfference] = useState('')
  
  // const isJackpotActive = activeGame === JACKPOT
  const isWaitingGameActive = activeGameId === waitingCurrentGameId

  useEffect(() => {
    // switch language data ---
    setLanguageData(getLanguageData(activeLanguage))
    setBanners(getBanners(activeLanguage))
    setTermsContent(getContent('terms', activeLanguage))
    setPrivacyContent(getContent('privacy', activeLanguage))
    setHowToPlayContent1(getContent('how1', activeLanguage))
    setHowToPlayContent2(getContent('how2', activeLanguage))
    setOperatorContents(getOperatorContents(activeLanguage))
    setMounts(getMounts(activeLanguage))
  }, [activeLanguage])

  useEffect(() => {
    // get waiting and history draws ---

    const fetchData = async () => {
      try {
        setIsGameLoading(true)
       setIsHistoryBlockLoading(true)
       setSelectedDrawData(null)
       const historyResponse = await fetchDraws()
      if(historyResponse){
        let allDraws = historyResponse.allDraws;
        let currentGameId = historyResponse.allDraws[0].drawId;
        if(activeMenu=== NAVBAR_NAMES.DAILY) {
          allDraws = fakeDailyHistory.allDraws
          currentGameId = fakeDailyHistory.allDraws[0].drawId
        } else if(activeMenu=== NAVBAR_NAMES.WEEKLY) {
          allDraws = fakeWeeklyHistory.allDraws
          currentGameId = fakeWeeklyHistory.allDraws[0].drawId
        }

       setActiveGameId(currentGameId)
       setWaitingCurrentGameId(currentGameId)
       setCurrentDrawItems(allDraws)
       
      //  if(activeGame === CURRENT) {
        //  setWaitingJackpotGameId('')
        // setJackpotDrawItems([])

        const dateNowLocal = Date.now()
        let dateNow;
        if(!timeDifference) {
          dateNow = await instance.get('get-date').then(res => {
            let date = res.data.date.split(/[- :]/);
  
            return new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
          }).catch(e => {})
  
          
          setTimeDIfference( Date.parse(dateNow) - dateNowLocal )
        }


        const currentTimer = Date.parse(allDraws[0].date)- (Date.now() + ((timeDifference || (Date.parse(dateNow) - dateNowLocal)) - 5000)) + 100
        console.log('currentTimer', currentTimer, timeDifference)
        if(currentTimer) {
        setCurrentTime(currentTimer.toString())
        // setCurrentTimer(currentTimer.toString())
        if(currentTimer > 0) {
          setIsCurrentGameStarted(false)
        }
       }
      // }
      //  if(activeGame === JACKPOT) {
      //    setWaitingCurrentGameId('')
      //   setWaitingJackpotGameId(historyResponse.allDraws[0].drawId)
      //   setCurrentDrawItems([])
      //    setJackpotDrawItems(historyResponse.allDraws)
      //  }
        setIsHistoryBlockLoading(false)
      }
      } catch (e) {}     
    }
      fetchData()
    // eslint-disable-next-line
  }, [activeMenu])


  useEffect(() => {
    // get gamers items with draw id ---
    
    const fetchData = async () => {
       setIsGameLoading(true)   

        if(activeGame === CURRENT) {
        if (waitingCurrentGameId && activeGameId !== waitingCurrentGameId) {
        currentDrawItems.forEach((el, i) => {
          if (i === 0) {
            return
          }
          if(el.drawId === activeGameId) {
            setHistoryWinnerBalls(el.winnerBalls)
          }
        })
      }
      } 
      // else if (activeGame === JACKPOT) {
      //   if (waitingJackpotGameId && activeGameId !== waitingJackpotGameId) {
      //   jackpotDrawItems.forEach((el, i) => {
      //     if (i === 0) {
      //       return
      //     }
      //     if(el.drawId === activeGameId) {
      //       setHistoryWinnerBalls(el.winnerBalls)
      //     }
          
      //   })
      // }
      // }
       const gamersResponse = await fetchTickets()
        gamersResponse && setGamersItems(gamersResponse.tickets)
        gamersResponse && setAllGamers(gamersResponse.ticketsCount)

        setIsGameLoading(false)
       
    }
      if(activeGameId) {
        
        fetchData()
      }
      // eslint-disable-next-line
  }, [activeGameId])


  useEffect(() => {
    // get gamers and tickets count with interval ---
    if (isWaitingGameActive) {
    const interval = setInterval(async () => {
      try{
      const gamersResponse = await fetchTickets()
        setGamersItems(gamersResponse.tickets)
        setAllGamers(gamersResponse.ticketsCount)
        } catch (e) {}
    }, variables.getGamersInterval);
    return () => {
      clearInterval(interval)
    }
  }
  // eslint-disable-next-line
  }, [isWaitingGameActive])

  // winnersneri hin dzev
  // useEffect(() => {
  //   // get winner items ---
  //   if(!!!isWaitingGameActive){
  //   setWinnerItems([])
  //   if(gamersItems.length) {
  //     const winnerItems = gamersItems.filter(i=> !!+i.winAmount)
  //     setWinnerItems(winnerItems)
  //   }
  //   if(!gamersItems.length) {
  //     setWinnerItems([])
  //   }
  // }
    
  // }, [gamersItems, isWaitingGameActive])


  // useEffect(() => {
  //   // get jackpot amount and timer with interval ---
  //   instance.post('get-jackpot-info', {"client":variables.client}).then(res => {
  //     let jackpot = res.data.amount.toString().split('').reverse()
  //       for (let i = 0; i < jackpot.length; i++) {
  //           if (i % 3 === 0 && i !== 0) {
  //             jackpot[i-1] = '.' + jackpot[i-1]
  //           }
  //       }
  //     setJackpotAmount(jackpot.reverse().join(""))
  //     instance.get('get-date').then(time => {
  //       const jackpotTimer = Date.parse(res.data.date)-Date.parse(time.data.date) + 1
  //       if(jackpotTimer) {
  //       setJackpotTimer(jackpotTimer.toString())
  //       setJackpotTime(jackpotTimer.toString())
  //       }
  //     }).catch(e=>{})
  //   }).catch(e => {})
  //   const JackpotInterval = setInterval(async () => {
  //     const jackpotAmount = await instance.post('get-jackpot-info', {"client":variables.client,})
  //     .then(res => res.data.amount).catch(e=>console.error(e))
  //     if(jackpotAmount) {
  //     let jackpot = jackpotAmount.toString().split('').reverse()
  //       for (let i = 0; i < jackpot.length; i++) {
  //           if (i % 3 === 0 && i !== 0) {
  //             jackpot[i-1] = '.' + jackpot[i-1]
  //           }
  //       }
  //       setJackpotAmount(jackpot.reverse().join(""));
  //     }
  //     // setJackpotAmount(jackpotAmount)
      
  //   }, variables.jackpotInterval);
  //   return () => {
  //     clearInterval(JackpotInterval)
  //   }
  // }, [])

  useEffect(() => {
    // current game count down timer --- 
    if(currentTime) {
      const currentInterval = setInterval(() => {
        setCurrentTimer(Date.parse(currentDrawItems[0].date)- (Date.now() + timeDifference - 5000) + 100)
      }, 1000);

      return () => {
        clearInterval(currentInterval)
      }
    }
    // eslint-disable-next-line
  }, [currentTime])


  useEffect(() => {
    // start current game ---
    if(currentTimer && activeGame === CURRENT && activeGameId === waitingCurrentGameId && currentTimer < 1000 && currentTimer >= 0) {
      startCurrentGame(true, setWaitingCurrentWinnerBalls, setIsCurrentGameStarted)
      
    }
    if(currentTimer && activeGame === CURRENT && activeGameId !== waitingCurrentGameId && currentTimer < 1000 && currentTimer >= 0) {
      startCurrentGame(false, setWaitingCurrentWinnerBalls, setIsCurrentGameStarted)
    }
    if(currentTimer && currentTimer <= 15500 && currentTimer > 0 && !isNoMoreBetsActive) {
      setIsNoMoreBetsActive(true)
    }
    if(currentTimer && currentTimer > 15500 && isNoMoreBetsActive) {
      setIsNoMoreBetsActive(false)
    }

    if(currentTimer && (currentTimer < 0)) {
      setCurrentTime(null)
      setCurrentTimer(null)
      window.location.reload()
    }
    // eslint-disable-next-line
  }, [currentTimer])


  // useEffect(() => {
  //   // jackpot count down timer --- 
  //   if(jackpotTime) {
  //     const jackpotInterval = setInterval(() => {
  //       setJackpotTimer(prev => prev - 1000)
  //     }, 1000);

  //     return () => {
  //       clearInterval(jackpotInterval)
  //     }
  //   }
    
  // }, [jackpotTime])

  // useEffect(() => {
  //   // start jackpot game ---
  //   if(jackpotTimer && activeGame === CURRENT  && jackpotTimer < 1000 && jackpotTimer>= 0) {
  //     startJackpotGame(false, 10000, 12000, 14000, setWaitingJackpotWinnerBalls, setIsJackpotGameStarted)
  //   }
  //   if(jackpotTimer && activeGame === JACKPOT && activeGameId === waitingJackpotGameId && jackpotTimer < 1000 && jackpotTimer>= 0) {
  //     startJackpotGame(true, 10000, 12000, 14000, setWaitingJackpotWinnerBalls, setIsJackpotGameStarted)
  //   }
  //   if(jackpotTimer && activeGame === JACKPOT && activeGameId !== waitingJackpotGameId && jackpotTimer < 1000 && jackpotTimer>= 0) {
     
  //     startJackpotGame(false, 10000, 12000, 14000, setWaitingJackpotWinnerBalls, setIsJackpotGameStarted)

  //   }
  //   // eslint-disable-next-line
  // }, [jackpotTimer])

  const startCurrentGame = async (loading, setWinnerBalls, startedGame) => {
    setIsHistoryBlockLoading(false)
    if(loading){setIsGameLoading(true)}
    setCurrentTime(null)
    setCurrentTimer(null)
    startedGame(true)

    const historyResponse = await fetchDraws()
    const gamersResponse = await fetchTickets(historyResponse.allDraws[1].drawId)
     if(loading){setIsGameLoading(false)}
     if(historyResponse){
      // const winnerItems = gamersResponse.tickets.filter(i=> !!+i.winAmount)
     if(historyResponse.allDraws[1] && historyResponse.allDraws[1].winnerBalls[0]){
    for (let i = 1; i <= historyResponse.allDraws[1].winnerBalls.length; i++) {
      setTimeout(() => {
        setWinnerBalls((prev) => [...prev, historyResponse.allDraws[1].winnerBalls[i-1]]);
      }, i * 1000 - 1000)
    }
  }
      setTimeout(() => {
        // setWaitingWinnerItems(winnerItems)
        if(isWaitingGameActive){
          setGamersItems(gamersResponse.tickets)
          setAllGamers(gamersResponse.ticketsCount)
        }
      }, 5000);
      setTimeout(() => {
        setIsNoMoreBetsActive(false)
        setIsCurrentAnimationActive(true)
      }, 11000);
    setTimeout(() => {
      setIsCurrentAnimationActive(false)
    }, 13000);
    setTimeout(async () => {
      startedGame(false)
      setWinnerBalls([])
      // setWaitingWinnerItems([])
      setCurrentDrawItems(historyResponse.allDraws)
       setActiveGameId(historyResponse.allDraws[0].drawId)
       setWaitingCurrentGameId(historyResponse.allDraws[0].drawId)
       const dateNow = await instance.get('get-date').then(res => {
        let date = res.data.date.split(/[- :]/);

        return new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
      }).catch(()=> {})
      const dateNowLocal = Date.now()
        
        setTimeDIfference( Date.parse(dateNow) - dateNowLocal )

        const currentTimer = Date.parse(historyResponse.allDraws[0].date)- (Date.now() + (Date.parse(dateNow) - dateNowLocal - 5000)) + 100
        if(currentTimer) {
        setCurrentTime(currentTimer.toString())
        setCurrentTimer(currentTimer.toString())
        if(currentTimer > 0) {
          startedGame(false)
        }
      }
      
    }, 13000)
  }
  }

  // const startJackpotGame = async (loading, animationOn, animationOff, setNewData, setWinnerBalls, startedGame) => {
  //   if(loading){setIsGameLoading(true)}
  //   startedGame(true)

  //   const historyResponse = await instance.post('get-draws', {
  //     "client": variables.client,
  //     "jackpot": true
  //   }).then(res => res.data).catch(e=>console.error(e))
  //   const gamersResponse = await instance.post('get-tickets', {
  //     "client": variables.client,
  //     "draw_id": historyResponse.allDraws[1].drawId,
  //     "page_number": 0,
  //     "jackpot": true
  //    }).then(res=> res.data).catch(e=>console.error(e))
  //    const dateNow = await instance.get('get-date').then(res => res.data.date)
  //    const jackpotTimer = Date.parse(historyResponse.allDraws[0].date)- Date.parse(dateNow)+1
  //    setJackpotTime(jackpotTimer.toString())
  //    setJackpotTimer(jackpotTimer.toString())
  //    if(loading){setIsGameLoading(false)}
  //    if(historyResponse){
  //    if(historyResponse.allDraws[1] && historyResponse.allDraws[1].winnerBalls[0]){
  //   for (let i = 1; i <= historyResponse.allDraws[1].winnerBalls.length; i++) {
  //     setTimeout(() => {
  //       setWinnerBalls((prev) => [...prev, historyResponse.allDraws[1].winnerBalls[i-1]]);
  //     }, i * 1000 - 1000)
  //     }
  //   }
  //       setTimeout(() => {
  //         const winnerItems = gamersResponse.tickets.filter(i=> i.status === 'WIN')
  //         setWinnerItems(winnerItems)
  //         setIsJackpotAnimationActive(true)
  //       }, animationOn);
  //       setTimeout(() => {
  //         setIsJackpotAnimationActive(false)
  //       }, animationOff);
  //       setTimeout(async () => {
  //         startedGame(false)
  //         setWinnerBalls([])
  //         setWinnerItems([])
  //         setJackpotDrawItems(historyResponse.allDraws)
  //         //  setActiveGameId(historyResponse.allDraws[0].drawId)
  //          setWaitingJackpotGameId(historyResponse.allDraws[0].drawId)
  //       }, setNewData)
  //     }
  //     }



  useEffect(() => {
    // block scrolling ---
    if(isBodyLock) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'unset'
    }
    // eslint-disable-next-line
  },[isBodyLock])


  // fetch data ---------------------------------------
  
  const fetchTickets = async (isGameStarted) => {
    const gamersResponse = await instance.post('get-tickets', {
      "client": variables.client,
      "draw_id": isGameStarted ? isGameStarted : activeGameId,
      "page_number": 0,
      // "jackpot": isJackpotActive
     }).then(res=> res.data).catch(() => {})
        return gamersResponse
  }

  const fetchDraws = useCallback(async (page) => {
    const historyResponse = await instance.post('get-draws', {
      "client": variables.client,
      "page": page || 0,
      type: activeMenu === NAVBAR_NAMES.NOW ? null : activeMenu.toLowerCase()
      // "jackpot": isJackpotActive
    }).then(res => res.data).catch(() => {}) 
    if(!!historyResponse && !!historyResponse.allDraws && !!historyResponse.allDraws.length){
    const historyItems = {...historyResponse, allDraws: historyResponse.allDraws.map(item => {
      let date = item.date.split(/[- :]/);

      let safariDate = new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
      return {...item, date: safariDate}
    })
  }
    return historyItems
  } else {
    return historyResponse
  }
}, [activeMenu])



  return (
      <>
        {languageData && <div className='loto'>

          {/* Popups ---*/}
          {isHowToPlayActive && 
          <HowToPlay togglePopup={setIsHowToPlayActive} languageData={languageData} HowToPlayContent1={HowToPlayContent1}
          HowToPlayContent2={HowToPlayContent2} operatorContents={operatorContents} />
          }

          {isAllGamesPopupActive && <ErrorBoundary>
          <AllGamesPopupContainer activeGameId={activeGameId} togglePopup={setIsAllGamesPopupActive} 
          allGamers={allGamers} languageData={languageData} waitingCurrentWinnerBalls={waitingCurrentWinnerBalls} 
          historyWinnerBalls={historyWinnerBalls} isWaitingGameActive={isWaitingGameActive} /> 
          </ErrorBoundary>}

          {isSelectDrawPopupActive && <SelectDrawPopup togglePopup={setIsSelectDrawPopupActive} mounts={mounts}
          toggleSelectedDrawData={setSelectedDrawData} selectedDrawData={selectedDrawData}
          languageData={languageData} />}

          {isCheckNumberPopupActive && selectedDrawData  && <CheckNumbersPopup 
           togglePopup={setIsCheckNumberPopupActive} languageData={languageData}
           selectedDrawData={selectedDrawData} checkNumber={checkNumber}/>}

          {isTermsOfUsePopupActive && <TermsOfUsePopup togglePopup={setIsTermsOfUsePopupActive} languageData={languageData} activeLanguage={activeLanguage} TermsContent={TermsContent} />}

          {isDrawsHistoryPopupActive && <DrawsHistory fetchDraws={fetchDraws} togglePopup={setIsDrawsHistoryPopupActive} languageData={languageData} />}

          {isPrivacyPolicyPopupActive && <PrivacyPolicyPopup togglePopup={setIsPrivacyPolicyPopupActive} languageData={languageData} PrivacyContent={PrivacyContent} />}

          {/* Pages ---- */}
          <timerContext.Provider value={currentTimer}>
            <MainPage activeGame={activeGame} setActiveGame={setActiveGame} currentDrawItems={currentDrawItems}
            gamersItems={gamersItems} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage}
            toggleHowToPlayPopup={setIsHowToPlayActive} toggleAllGamesPopup={setIsAllGamesPopupActive} banners={banners}
            toggleSelectDrawPopup={setIsSelectDrawPopupActive} toggleCheckNumberPopup={setIsCheckNumberPopupActive}
            toggleTermsOfUsePopup={setIsTermsOfUsePopupActive} toggleDrawsHistoryPopup={setIsDrawsHistoryPopupActive}
            togglePrivacyPolicyPopup={setIsPrivacyPolicyPopupActive} checkNumber={checkNumber} setCheckNumber={setCheckNumber}
            isGameLoading={isGameLoading} activeGameId={activeGameId} toggleActiveGameId={setActiveGameId} mounts={mounts}
            selectedDrawData={selectedDrawData}  isWaitingGameActive={isWaitingGameActive} isNoMoreBetsActive={isNoMoreBetsActive}
            isHistoryBlockLoading={isHistoryBlockLoading} historyWinnerBalls={historyWinnerBalls} setHistoryWinnerBalls={setHistoryWinnerBalls}
            waitingCurrentWinnerBalls={waitingCurrentWinnerBalls} setWaitingCurrentWinnerBalls={setWaitingCurrentWinnerBalls}
            allGamers={allGamers} isCurrentGameStarted={isCurrentGameStarted} setIsCurrentGameStarted={setIsCurrentGameStarted}    
            languageData={languageData} isCurrentAnimationActive={isCurrentAnimationActive} isBodyLock={isBodyLock} setActiveMenu={setActiveMenu} 
            activeMenu={activeMenu}
              />
          </timerContext.Provider>
        </div>}
      </>
  );
}

export default App;


const {CURRENT} = gameTypes
const {EN} = languageTypes