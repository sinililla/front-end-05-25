import { useState } from "react"

function Meist() {
 const [ message, setMessage ] = useState("Vali mõni tegevus");

 function apply(){
    setMessage("Selleks saada meile e-mail jobs@html-css.com");
 }

 function employees(){
    setMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal");
 }

 function contact(){
    setMessage("Ühenduse võtmiseks mine lehele 'Kontakt'");
 }

  return (
    <div>
        <div>{message}</div>
        <button onClick = {apply}>Kandideeri tööle</button>
        <button onClick = {employees}>Vaata meie töötajaid</button>
        <button onClick = {contact}>Võta meiega ühendust</button>
    </div>
  )
}

export default Meist