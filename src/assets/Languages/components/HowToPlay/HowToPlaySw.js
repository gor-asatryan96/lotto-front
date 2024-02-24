import React from 'react'
import '../../../../Components/App.css'
import { GAME_DURATION } from '../../../../helpers/Constants'

const HowToPlaySw = ({part1, part2}) => {
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
          <p>Kila baada ya dakika {GAME_DURATION} ‘’Chukua Tano’’ inatoa droo ya namba 5 inayojumuisha kutoka 0 hadi 9. </p>
          <p>Kabla ya droo, unachagua namba 5 na unaweka bashiri kwa kutumia namba yako ya simu.</p> 
          <p>Acha tuseme uliweka bashiri kwa dau la TSH 1,000</p>
          <p>1. Ikiwa namba moja inalingana, unashinda TSH 1,000 (bashiri x1).</p>
          <p>2.  Ikiwa namba mbili zinalingana, unashinda TSH 2,000 (bashiri x2).</p>
          <p>3. Kwa namba tatu zikilingana, unashinda TSH 10,000 (bashiri x10).</p>
          <p>4. Kwa namba nne, unashinda TSH 100,000 (bashiri x100).</p>
          <p>5. Ikiwa namba zote tano zinalingana, unashinda TSH 5,000,000 (bashiri x5000).</p>
          <p>Kumbuka: jambo muhimu zaidi ni msimamo wa namba zinazofanana.</p>
          <p>Mfano: Namba za droo ni 12345 na ikiwa namba ulizobashiri ni 72896, utashinda kwani kuna namba moja inayofanana katika nafasi ile ile. Lakini ikiwa namba zako za bashiri ni 27896, hautashinda, kwani namba zako zinazolingana haziko sawa.</p>
            <p>Mifano na namba zote zinazofanana kwa droo 12345</p>
            <p>1. 52781 (moja inalingana) </p>
            <p>2. 15388 (mbili zinalingana)</p>
            <p>3. 62347 (tatu zinalingana) </p>
            <p>4. 12545 (nne zinalingana)</p>
            <p>5. 12345 (tano zinalingana)</p>
          <p>Na hapo tayari!</p>
          <p>Baada ya hatua zote kumalizika, utapokea SMS ambayo itakubali bashiri yako na itakujulisha ikiwa umeshinda au umepoteza mara tu baada ya droo kuisha.</p>
            Kushinda ni njia rahisi na Playmaster.
          </div>
        </div>
      </div>}
      </>
    )
}

export default HowToPlaySw
