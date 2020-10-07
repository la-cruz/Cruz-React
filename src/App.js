import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import ScrollToTop from './components/Basic/ScrollToTop'
import Error404 from './components/Basic/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Legal from './components/Legal/Legal'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Perso from './components/Perso/Perso'
import {WOW} from 'wowjs'

import toKebabCase from './lib/toKebabCase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Projects
import projects from "./lib/projects";
import members from './lib/team'

function App() {
  const { i18n } = useTranslation()
  i18n.changeLanguage("fr")

  useEffect(() => {
    const wow = new WOW({offset: 50})
    wow.init()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/legal">
          <Legal />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {
          projects.map(project => {
            return (
              <Route key={project.presentation.name} exact path={`/projects/${toKebabCase(project.presentation.route)}`}>
                <Project data={project} />
              </Route>
            )
          })
        }
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {
          members.map(member => (
            <Route exact path={`/team/${member.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${member.firstname.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} key={member.name}>
              <Perso data={member} />
            </Route>
          ))
        }
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
