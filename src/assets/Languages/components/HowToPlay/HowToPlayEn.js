import React from 'react'
import '../../../../Components/App.css'
import { GAME_DURATION } from '../../../../helpers/Constants'

const HowToPlayEn = ({part1, part2}) => {
    return (
      <>
        {part1 && <div className="textContent">
        <div className="textContainer">
          <div className="textHeader">CHUKUA TANO</div>
          <div className="textBody">
            Play Master is suggesting you brand NEW Number game - CHUKUA TANO.
          </div>
        </div>
        <div className="textContainer">
          <div className="textHeader ">How to place the bet</div>
          <div className="textBody ">
            <p>For placing your bet</p>
            
            <p>&#x25CF; Pay the money through your mobile wallets (Available
            methods are MPesa, Tig Pesa, Halo Pesa, Airtel),</p>
            <p>&#x25CF; Choose Play Master’s business number ( Mpesa 800888, Tigo 888888, Halo 800888, Airtel 800888)</p>
            <p>&#x25CF; In Reference part type “t” then text your desired 5 digits
            number. ( ex. t12345)</p>
            <p>&#x25CF; After all, choose the amount of the money for your bet.</p>
          </div>
        </div>
      </div>}
      {part2 && <div className="textContent marginTop">
        <div className="textContainer">
          <div className="textHeader">How to play</div>
          <div className="textBody">
          <p>Every {GAME_DURATION} minutes Chukua Tano draws a number consisting of 5 digits from 0 to 9.</p>
            <p>Before the draw , you choose a number of 5 digits and you place your bet with your phone number.</p>
            <p>Let’s say you placed a bet with 1000 TZS.</p>
            <p>1. If one digit matches, you win 1 000 TZS. (bet x1).</p>
            <p>2. If two digits match, you win 2 000TZS. (bet x2).</p>
            <p>3. For three matches, you win 10 000TZS. (bet x10).</p>
            <p>4. For four 100 000 TZS. (bet x100).</p>
            <p>5. In case all five digits match, you win 5 000 000 TZS.(bet x5000).</p>
            <p>Note: the most important thing is the position of matching numbers. </p>
            <p>Example: Draw numbers are 12345 and if the numbers you bet on are 72896, you will win as there is one matching number in the same position. But if your bet numbers are 27896, you won’t win, as your matching numbers aren’t in the same position.</p>
            <p>Examples with all matching numbers for draw 12345:</p>
            <p>1. 52781 (one match) </p>
            <p>2. 15388 (two matches) </p>
            <p>3. 62347 (three matches) </p>
            <p>4. 12545 ( four matches)</p>
            <p>5. 12345 (five matches)</p>
            <p>And that’s it!</p>
            <p>After all the steps are done, you will receive an SMS which will approve your bet and will let you know if you won or lost right after the draw ends.</p>
            Winning is way simple with Playmaster.
          </div>
        </div>
      </div>}
      </>
    )
}

export default HowToPlayEn
