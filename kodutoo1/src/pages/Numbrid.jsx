import { useState } from "react";

function Numbrid() {
 const [numbers, setNumbers] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 69, 526]);

 const sortAscending = () => {
    numbers.sort((a, b) => a - b);
    setNumbers(numbers.slice());
 }

  const sortDescending = () => {
    numbers.sort((a, b) => b - a);
    setNumbers(numbers.slice());
 }

 const Alphabetically = () => {
    numbers.sort((a, b) => a.toString().localeCompare(b));
    setNumbers(numbers.slice());
 }

 const AlphabeticallyReverse = () => {
    numbers.sort((a, b) => b.toString().localeCompare(a));
    setNumbers(numbers.slice());
 }

 function LargerThan8() {
    const vastus = numbers.filter(number => number > 8);
    setNumbers(vastus);
 }

 function LessThan10() {
    const vastus = numbers.filter(number => number < 10);
    setNumbers(vastus);
 }

 function EvenNumbers() {
    const vastus = numbers.filter(number => number % 2 === 0);
    setNumbers(vastus);
 }

 function OddNumbers() {
    const vastus = numbers.filter(number => number % 2 !== 0);
    setNumbers(vastus);
 }

 function BeginsWith1() {
    const vastus = numbers.filter(number => number.toString().startsWith("1"));
    setNumbers(vastus);
 }

 function Includes3() {
    const vastus = numbers.filter(number => number.toString().includes("3"));
    setNumbers(vastus);
 }

 function reset() {
    setNumbers([4, 23, 7, 39, 19, 0, 9, 14, 135, 69, 526]);
 }

  return (
    <div>
        {numbers.map(number => <div key={number}>{number}</div>)}
        <br /><br />
        <div>Sorteeri:</div>
        <button onClick={sortAscending}>Kasvavalt</button>
        <button onClick={sortDescending}>Kahanevalt</button>
        <button onClick={Alphabetically}>"Tähestiku järjekorras"</button>
        <button onClick={AlphabeticallyReverse}>"Tähestiku järjekorras vastupidiselt"</button>
        <br /><br />
        <div>Filtreeri:</div>
        <button onClick={LargerThan8}>Suuremad kui 8</button>
        <button onClick={LessThan10}>Väiksemad kui 10</button>
        <button onClick={EvenNumbers}>Paarisarvud</button>
        <button onClick={OddNumbers}>Paaritud arvud</button>
        <button onClick={BeginsWith1}>Algavad 1-ga</button>
        <button onClick={Includes3}>Sisaldavad 3-e</button>
        <button onClick={reset}>Lähtesta filter</button>
    </div>
  )
}

export default Numbrid