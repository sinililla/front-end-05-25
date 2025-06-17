import { Link } from "react-router-dom"
import { useState } from "react"

function Courses() {
  const [ kursus, uuendaKursus ] = useState("Valimata");
  return (
    <div>
       <Link to="/">
            <button className="tagasi">Tagasi</button>
        </Link>
        <br />
      <div>Kursuste sisu</div>
      <button className={kursus === "Udemy" ? "button-active" : "button-inactive"} onClick = {() => uuendaKursus("Udemy")}>Udemy</button>
      <button className={kursus === "Coursera" ? "button-active" : "button-inactive"} onClick = {() => uuendaKursus("Coursera")}>Coursera</button>
      <button className={kursus === "Codeacademy" ? "button-active" : "button-inactive"} onClick = {() => uuendaKursus("Codeacademy")}>Codeacademy</button>
      <button className={kursus === "Udacity" ? "button-active" : "button-inactive"} onClick = {() => uuendaKursus("Udacity")}>Udacity</button>

      <br />
      {kursus === "Valimata" && <div>Tee valik</div>}
      {kursus === "Udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>} 
      {kursus === "Coursera" && <div>Siin on kirjeldus (loend) Coursera.org läbitud kursustest</div>}
      {kursus === "Codeacademy" && <div>Siin on kirjeldus (loend) Codeacademy.com läbitud kursustest</div>}
      {kursus === "Udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
        

    </div>
  )
}

export default Courses