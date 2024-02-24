import React from 'react'
import '../../../../Components/App.css'
import { GAME_DURATION } from '../../../../helpers/Constants'

const HowToPlayFr = ({part1, part2}) => {
    return (
      <>
        {part1 && <div className="textContent">
        <div className="textContainer">
          <div className="textHeader">CHUKUA TANO</div>
          <div className="textBody">
          Play Master inakuletea utambulisho wa mchezo MPYA wa Namba - CHUKUA TANO.
          </div>
        </div>
        <div className="textContainer">
          <div className="textHeader ">Jinsi ya kuweka bashiri</div>
          <div className="textBody ">
          <p>Kwa kuweka bashiri yako</p>
          <p>&#x25CF; Lipa pesa kupitia simu yako (Njia zinazopatikana ni M-Pesa, Tigo Pesa, Halo Pesa na Airtel Money),</p>
          <p>&#x25CF; Chagua namba ya biashara ya Play Master ( Mpesa 800888, Tigo 888888, Halo 800888, Airtel 800888)</p>
          <p>&#x25CF; Kwenye Kumbukumbu namba anza na "t" kisha andika namba zako 5 unazotaka (mfano: t12345)</p>
          <p>&#x25CF; Baada ya yote, chagua kiasi cha pesa kubashiri.</p>
          </div>
        </div>
      </div>}
      {part2 && <div className="textContent marginTop">
        <div className="textContainer">
          <div className="textHeader">Jinsi ya kucheza</div>
          <div className="textBody">
          <p>Kila baada ya dakika {GAME_DURATION} ‘’Chukua Tano’’ inatoa droo ya namba 5 inayojumuisha kutoka 0 hadi 9. Kwa mfano 02056 nk.</p>
          <p>Kabla ya droo, unachagua namba 5 na unaweka bashiri kwa kutumia namba yako ya simu.</p> 
          <p>Acha tuseme uliweka bashiri kwa dau la TSH 1,000</p>
          <p>1. Ikiwa namba ya kwanza imetoka utashinda TSH 2,000 (bashiri x2). Katika mfano wetu nk 03546</p>
          <p>2. Ikiwa namba mbili za kwanza zinalingana, utashinda TSH 5,000 (bashiri x5). Katika mfano wetu nk 02197</p>
          <p>3. Kwa namba tatu za kwanza TSH 50,000 (bashiri x50). Katika mfano wetu nk 02078</p>
          <p>4. Kwa namba nne za kwanza TSH 500,000 (bashiri x500). Katika mfano wetu nk 02059</p>
          <p>5. Iwapo namba zote tano zitafanikiwa kwenye droo, utashinda TSH 5,000,000 (bashiri x5000). Katika mfano wetu nk 02056</p>
          <p>Na hapo tayari!</p>
          <p>Baada ya hatua zote kumalizika, utapokea SMS ambayo itakubali bashiri yako na itakujulisha ikiwa umeshinda au umepoteza mara tu baada ya droo kuisha.</p>
            Kushinda ni njia rahisi na Playmaster.
          </div>
        </div>
      </div>}
      </>
    )
}

export default HowToPlayFr
