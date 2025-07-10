import { Link } from 'react-router-dom'

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised"))|| [];

  return (
    <div>
      <div>See on uudiste leht, nähtav localhost:5173/uudised aadressil</div>
      {uudised.length === 0 && <div>Ühtegi uudist ei ole! Lisame õige pea.</div>}
      {uudised.map((uudis, index) =>
        <div key={uudis}>
          <Link to={"/uudis/" + index}><div>{uudis}</div></Link>
        </div>
      )}

    
    </div>
  );
}

export default Uudised;