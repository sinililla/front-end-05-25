import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "menu": {
        "home" : "Home",
        "admin" : "Admin",
        "cart" : "Cart",
      },
      "homepage": {
        "sortAZ" : "Sort A-Z",
        "sortZA" : "Sort Z-A",
        "cheapfirst" : "Cheapest first",
        "expensivefirst" : "Expensive first",
        "bestfirst" : "Best first",
        "worstfirst" : "Worst first",
        "addtocart" : "Add to cart",
        "moreinfo" : "More info",
      },
      "admin": {
        "maintain.products" : "Maintain products",
        "add.product" : "Add product",
        "maintain.categories" : "Maintain categories",
        "maintain.shops" : "Maintain shops",
      },
      "cart": {
        "isempty" : "Cart is empty!",
        "carthas" : "Cart",
        "itemstotal" : "item(s), total:",
        "emptycart" : "Empty cart",
        "removefrom" : "Remove from cart",
      }
    }
  },
  et: {
    translation: {
      "menu": {
        "home" : "Avaleht",
        "admin" : "Haldur",
        "cart" : "Ostukorv",
      },
      "homepage": {
        "sortAZ" : "Sorteeri A-Z",
        "sortZA" : "Sorteeri Z-A",
        "cheapfirst" : "Odavaim enne",
        "expensivefirst" : "Kallim enne",
        "bestfirst" : "Parim enne",
        "worstfirst" : "Halvim enne",
        "addtocart" : "Lisa ostukorvi",
        "moreinfo" : "Vt lähemalt",
      },
      "admin": {
        "maintain.products" : "Halda tooteid",
        "add.product" : "Lisa toode",
        "maintain.categories" : "Halda kategooriaid",
        "maintain.shops" : "Halda poode",
      },
      "cart": {
        "isempty" : "Ostukorv on tühi!",
        "carthas" : "Ostukorvis",
        "itemstotal" : "ese(t), kokku:",
        "emptycart" : "Tühjenda ostukorv",
        "removefrom" : "Eemalda ostukorvist",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;