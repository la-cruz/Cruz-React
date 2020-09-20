import React from 'react';
import { useTranslation } from "react-i18next";

import ScrollToTop from './components/Basic/ScrollToTop'
import Error404 from './components/Basic/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
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
  console.log(projects);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {
          projects.map( (project) => {
            return (
              <Route path={"/" + project.name} key={project.name}>
                <Project data={project} />
              </Route>
            )
          })
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
