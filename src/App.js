import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import ScrollToTop from './components/Basic/ScrollToTop'
import Error404 from './components/Basic/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Legal from './components/Legal/Legal'
import Contact from './components/Contact/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const { i18n } = useTranslation()
  i18n.changeLanguage("fr")

  useEffect( () => {
    const logo = document.querySelector(".cruz-logo > img");
      if(window.innerWidth > 1200) {
        logo.style.width = "5%";
        logo.style.left = "5%";
        logo.style.top = "5%";
        logo.style.opacity = "1";
      } else if(window.innerWidth < 500) {
          var header = document.createElement("div");
          header.className = "header-responsive";
          document.body.appendChild(header);

          window.onscroll = function() {
              if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                  header.style.opacity = "1";
              } else {
                  header.style.opacity = "0";
              }
          }
      }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/legal">
          <Legal />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
