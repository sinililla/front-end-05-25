function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  const lisaOstukorvi = (clickedComputer) => {
    const cart = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    cart.push(clickedComputer);
    localStorage.setItem("cartLaptops", JSON.stringify(cart));
  }

  return (
    <div>
        <div>Tere!</div> <br />
        <div>Siin lehel saad sülearvuteid vaadata ja lisada</div> <br />
        <div className="rectangle"></div>
        <br />
        {computers.map(oneComputer =>
          <div>
            <div>{oneComputer.mark}</div>
            <div>{oneComputer.mudel}</div>
            <div>{oneComputer.maksumus}</div>
            <button onClick={() => lisaOstukorvi(oneComputer)}>Lisa ostukorvi</button>
          </div>
        )}
    </div>
  )
}

export default Avaleht