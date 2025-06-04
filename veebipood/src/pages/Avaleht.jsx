 // põhja saab 'rfce'-ga

import { useState } from "react";
import laigitud from "../assets/laigitud.svg"
import mittelaigitud from "../assets/mittelaigitud.svg"

// lilla --> käsklused: import, from, export, if, else, return
// helesinine --> imporditud väärtus, sissekirjutatud väärtus: console. , useState impordis,
//                                     localStorage. , .current.value , src, alt, className, disabled
// tavaline sinine --> meie tehtud muutujad
// tumesinine --> liigitus: function, const, let, button, img, input, div
// tumesinine --> etteantud väärtus. true. false. undefined. null
// heleroheline --> numbriline väärtus
// oranž --> sõnaline väärtus = sõne (string)
// valge --> märgid = ; , === && || . HTMLs väljakuvatav tekst
// roheline suure tähega HTMLis --> sisseimporditud HTML Route, Routes, Link
// tumeroheline --> kommentaar
{{{{{((((([[[[[]]]]])))))}}}}}
// sulgude osas värvide tähendust pole, värvid on sulupaaride eristamiseks
// kollane --> funktsioon, kui kasutusele siis on sulud lõpus, aga useState sees mitte.



// renderdamine --> HTMLi väljakuvamine
// re-renderdamine --> HTMLi uuendamine useState-i setteri poolt

function Avaleht() {
  const [kogus, setkogus] = useState(0); // number (ilma jutumärkideta). teeme arvutusi: * / < >
  const [sonum, setSonum] = useState("Muuda kogust!"); // kas sisaldab? kas algab? suurteks tähtedeks
  const [like, setLike] = useState(false); // kui on selgelt üks või teine.  saab tagurpidi keerata

  // number: hinnad, kogused, vanus, sünniaastad,
  // string: isikukood, telefoninumber, postiindeks - ei tehta arvutusi
  // boolean: täisealine, makstud, registreerunud, sisselogitud, kustutatud, aktiivne

  function nulli() {
    setkogus(0);
    setSonum("Nullisid koguse!");

  }

  function vahenda() {
    setkogus(kogus-1);
    setSonum("Vähendasid kogust!");

  }

  function suurenda() {
    setkogus(kogus + 1);
    setSonum("Suurendasid kogust!");

  }

  return (
    <div>
      {like === true && <img onClick={() => setLike(false)} src={laigitud} alt="" />}
      {like === false && <img onClick={() => setLike(true)} src={mittelaigitud} alt="" />}
      

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}<br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>

    </div>
  )
}

export default Avaleht