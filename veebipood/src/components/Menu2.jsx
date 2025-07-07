import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

function Menu() {

  const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>

  const muudaKeelEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  const muudaKeelET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }


  return (
    <div>
        <button onClick={muudaKeelEN}>English</button>
        <button onClick={muudaKeelET}>Eesti</button>

        <Link to="/">
          <img className="pilt" src="https://cdn.abcotvs.com/dip/images/15072349_071924-wtvd-worlds-largest-duck.jpg" alt="hiiglaslik part" />
        </Link>
        
        <Link to="/ostukorv">
        <button>{t("menu.cart")}</button>
        </Link>

        <Link to="/lisa-toode">
        <button>{t("menu.add-product")}</button>
        </Link>

        <Link to="/osta-kinkekaart">
        <button>{t("menu.giftcards")}</button>
        </Link>

        <Link to="/seaded">
        <button>{t("menu.settings")}</button>
        </Link>

        <Link to="/kalkulaator">
          <button>Kalkulaator</button>
        </Link>

        <Link to="/arrays-home">
          <button>Array-d</button>
        </Link>

        <Link to="/halda-home">
          <button>Array-sid lisama ja kustutama</button>
        </Link>
    </div>
  )
}

export default Menu