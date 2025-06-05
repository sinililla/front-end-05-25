import { useState } from "react"

function Kontakt() {
 const [ aadress, setAadress ] = useState("Tallinn");
 const [ telefon, setTelefon ] = useState("5512345");
 const [ email, setEmail ] = useState("blaa@baa.com");
 const [ ingliseKeelne, setIngliseKeelne ] = useState(false);

 function translate_en(){
    setAadress("London");
    setTelefon("12312412");
    setEmail("london@london.com");
    setIngliseKeelne(true);
 }

 function translate_ee(){
    setAadress("Tallinn");
    setTelefon("5512345");
    setEmail("blaa@baa.com");
    setIngliseKeelne(false);
 }

  return (
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        {ingliseKeelne === false && <button onClick = {translate_en}>Muuda inglise keelseks</button>}
        {ingliseKeelne === true && <button onClick = {translate_ee}>Muuda eesti keelseks</button>}
    </div>
  )
}

export default Kontakt