import React from 'react';
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

import members from './lib/team'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Projects
import projects from "./lib/projects";

function App() {
  const { i18n } = useTranslation()
  i18n.changeLanguage("fr")

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
          projects.map( (project, i) => {
            return (
              <Route key={i} path={"/project/" + project.presentation.name.replace(' ', "-").toLowerCase()}>
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
            <Route path={`/perso/${member.name}`} key={member.name}>
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
