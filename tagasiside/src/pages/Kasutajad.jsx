import { useState } from "react"
import kasutajadFailist from "../kasutajad.json"

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"

function Kasutajad() {
    const [kasutajad, setKasutajad] = useState(kasutajadFailist);

    const reset = () => {
        setKasutajad(kasutajadFailist);
    }

    const kustuta = (index) => {
        kasutajad.splice(index, 1);
        setKasutajad(kasutajad.slice());
    }

    const KymmeTahteVoiRohkem = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        setKasutajad(vastus);
    }

    const OtsiLucio = () => {
        const vastus = kasutajad.findIndex(kasutaja => kasutaja.email === "Lucio_Hettinger@annie.ca");
        console.log(vastus);
    }

    // substring (0, 1) tähistab indeksi vahemikku kust seda tähte otsitakse
    const FirstLetterNameC = () => {
        const vastus = kasutajad.find(kasutaja => kasutaja.name.substring(0, 1) === "C");
        console.log(vastus);
    }

    const SortByLat = () => {
        kasutajad.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat.localeCompare));
        setKasutajad(kasutajad.slice());
    }

    const PositiveLng = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
        setKasutajad(vastus);
    }
    // liida kõikide kasutajate Id väärtused ja anna console logi
    const AddIds = () => {
        let sum = 0;
        kasutajad.forEach(kasutaja => { sum = sum + kasutaja.id });
        console.log(sum);
    }

    // Lisa absoluutselt kõikidele juurde „phone:“ lahtrisse 000- algus // Mis see ... seal ees teeb? ja miks on 'kasutaja' vajalik kui lisame aint phone'ile
    const AddPhone = () => {
        const vastus = kasutajad.map(kasutaja => ({...kasutaja, phone: "000-"+kasutaja.phone}));
        setKasutajad(vastus);
    }   

    // Tee uus massiiv, milles on nüüd ainult e-mailid ehk 10 elementi stringina: [„kasutaja 1 email“,“kasutaja 2 email“ jne]. Console.log() vastus.
    const OnlyEmails = () => {
        const vastus = kasutajad.map(kasutaja => kasutaja.email);
        console.log(vastus);
    }

    // Asenda catchphrase sees kõik ’a’ tähed ’e’ tähega, jättes alles kõik ülejäänud. Alles peab jätma nii kasutaja varasema sisu kui ettevõtte varasema sisu. KUIDAS SEE VORMISTUS TÖÖTAB?
    const ReplaceCatchphrase = () => {
        const vastus = kasutajad.map(kasutaja => ({...kasutaja, company: {...kasutaja.company, catchPhrase: kasutaja.company.catchPhrase.replaceAll("a", "e")}}));
        setKasutajad(vastus);
    }

  return (
    <div>
        <button onClick={reset}>Reset</button>
        <button onClick={KymmeTahteVoiRohkem}>Kasutajanimes 10 või rohkem tähte</button>
        <button onClick={OtsiLucio}>Konsool logi indeks : Lucio_Hettinger@annie.ca</button>
        <button onClick={FirstLetterNameC}>Konsool logi esimene C algustähega kasutaja</button>
        <button onClick={SortByLat}>Sorteeri lat järgi</button>
        <button onClick={PositiveLng}>Positiivne lng</button>
        <button onClick={AddIds}>Liida ID summad</button>
        <button onClick={AddPhone}>+000 telefonidele</button>
        <button onClick={OnlyEmails}>Ainult emailid</button>
        <button onClick={ReplaceCatchphrase}>Asenda catchphraseis a'd e'dega</button>
        <div>{kasutajad.map((kasutaja, index) =>
            <div>
                <div>{kasutaja.id}</div>
                <div>{kasutaja.name}</div>
                <div>{kasutaja.username}</div>
                <div>{kasutaja.email}</div>
                <div>{kasutaja.address.street}</div>
                <div>{kasutaja.address.suite}</div>
                <div>{kasutaja.address.city}</div>
                <div>{kasutaja.address.zipcode}</div>
                <div>{kasutaja.address.geo.lat}</div>
                <div>{kasutaja.address.geo.lng}</div>
                <div>{kasutaja.phone}</div>
                <div>{kasutaja.website}</div>
                <div>{kasutaja.company.name}</div>
                <div>{kasutaja.company.catchPhrase}</div>
                <div>{kasutaja.company.bs}</div>
                <button onClick={() => kustuta(index)}>X</button>
                
                <br />
            </div>)}</div>
    </div>
  )
}

export default Kasutajad