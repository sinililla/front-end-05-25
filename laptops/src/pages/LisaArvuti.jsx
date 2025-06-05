import { useState } from "react";

function Add() {
  const [ message, setMessage ] = useState("Lisa arvuti!");
  const [ n2itaNuppu, uuendaN2aitaNuppu ] = useState(true);
  function addProduct(){
    setMessage("Arvuti lisatud");
    uuendaN2aitaNuppu(false);
  }
  // return osa sees on alati HTML mis kuvatakse välja sellel lehel
  // see element peab kindlasti olema üks komplekt (algama ja lõppema sama elemendiga) ((div))
  // div on tühjus või mõtteta element - seda lisatakse tekstidele ja ümbritsemiseks
  // label ja input on tavaliselt koos
  // br tähistab uue rea lisamist, kaks br-i tekitab elementide vahele tühiku
  return (
    <div>
      <div>Sõnum: {message}</div>
      <label>Mark</label> <br />
      <input type="text" /> <br />
      <label>Mudel</label> <br />
      <input type="text" /> <br />
      <label>Maksumus</label> <br />
      <input type="number" /> <br />
      {n2itaNuppu === true && <button onClick = {() => addProduct()}>Sisesta</button>}

    </div>
  )
}

export default Add