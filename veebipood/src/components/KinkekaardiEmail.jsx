import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function KinkekaardiEmail() {
     const emailRef = useRef(); //inputiga ära sidumiseks
     const [sonum, setSonum] = useState(""); // HTMLi, mis on muutuvas seisundis

  const sisesta = () => { // onClick
    if (emailRef.current.value.includes("@") === false) {
      setSonum("Ei saa lisada ilma @ märgita!");
      toast.error("Ei saa lisada ilma @ märgita!");
    } else {
      setSonum("Email lisatud!");
      toast.success("Email lisatud!");
    }

  }
  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="email">E-mail</label> <br />
      <input ref={emailRef} id="email" type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>


      <ToastContainer
        position="bottom-right"
        autoClose={4000}      
        theme="dark"      
      />
    </div>
  )
}

export default KinkekaardiEmail