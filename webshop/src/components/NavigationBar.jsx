import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


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
      <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Kaia Webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={t("menu.admin")} id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="admin/maintain-products">{t("admin.maintain.products")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="admin/maintain-categories">{t("admin.maintain.categories")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="admin/maintain-shops">{t("admin.maintain.shops")}</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/cart">{t("menu.cart")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("menu.email")}</Nav.Link>
            </Nav>
            <Nav>
              <button onClick={changeLanguageET}>Eesti</button>
              <button onClick={changeLanguageEN}>English</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar