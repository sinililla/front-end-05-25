import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function NavigationBar() {
  const { t, i18n } = useTranslation();

   const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("language", "et");
  }

  return (
    <>
        <Link to="">
            <button>{t("menu.home")}</button>
        </Link>

        <Link to="/admin">
            <button>{t("menu.admin")}</button>
        </Link>

        <Link to="/cart">
            <button>{t("menu.cart")}</button>
        </Link>

        <button onClick={changeLanguageEN}>ENG</button>

        <button onClick={changeLanguageET}>EST</button>
    </>
  )
}

export default NavigationBar