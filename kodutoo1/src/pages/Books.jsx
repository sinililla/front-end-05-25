import { useState } from "react";

function Books() {
  const [books, setBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejudice", "Jane Eyre"]);

  const sortAZ = () => {
    books.sort((a, b) => a.localeCompare(b));
    setBooks(books.slice());
  }

  const sortZA = () => {
    books.sort((a, b) => b.localeCompare(a));
    setBooks(books.slice());
  }

  const sortByLength = () => {
    books.sort((a, b) => a.length - b.length);
    setBooks(books.slice());
  }

  const sortSecondLetter = () => {
    books.sort((a, b) => a[1].localeCompare(b[1]));
    setBooks(books.slice());
  }

   // sorteerib sõnade arvu järgi, leidsin internetist
  const sortAmountOfWords = () => {
    books.sort((a, b) => a.trim().split(/\s+/).length - b.trim().split(/\s+/).length);
    setBooks(books.slice());
  }

  const sortPenultimateLetter = () => {
    books.sort((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
    setBooks(books.slice());
  }

  function reset() {
    setBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejudice", "Jane Eyre"]);
  }

  function filterThe() {
    const vastus = books.filter(book => book.startsWith("The"));
    setBooks(vastus);
  }

  function centerAnd() {
    const vastus = books.filter(book => book.includes("and"));
    setBooks(vastus);
  }

  function moreThan10() {
    const vastus = books.filter(book => book.length > 10);
    setBooks(vastus);
  }

  function lessThan7() {
    const vastus = books.filter(book => book.length < 7);
    setBooks(vastus);
  }

  function threeOrMoreWords() {
    const vastus = books.filter(book => book.trim().split(/\s+/).length >= 3);
    setBooks(vastus);
  }

  function penultimateLetterIsC() {
    const vastus = books.filter(book => book[book.length - 2] === "c");
    setBooks(vastus);
  }
  return (
    <div>
        <button onClick={sortAZ}>Sorteeri Esitähe järgi</button>
        <button onClick={sortZA}>Sorteeri Esitähe järgi Vastupidiselt</button>
        <button onClick={sortByLength}>Sorteeri Sõnapikkuse järgi</button>
        <button onClick={sortSecondLetter}>Sorteeri Teise tähe järgi</button>
        <button onClick={sortAmountOfWords}>Sorteeri sõnade arvu järgi</button>
        <button onClick={sortPenultimateLetter}>Sorteeri eelviimase tähe järgi</button>
        {books.map(book => <div key={book}>{book}</div>)}
        <button onClick={filterThe}>"The"'ga algavad</button>
        <button onClick={centerAnd}>Keskel on "and"</button>
        <button onClick={moreThan10}>Rohkem tähemärke kui 10</button>
        <button onClick={lessThan7}>Vähem tähemärke kui 7</button>
        <button onClick={threeOrMoreWords}>3 või rohkem sõna</button>
        <button onClick={penultimateLetterIsC}>Eelviimane täht on "C"</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Books