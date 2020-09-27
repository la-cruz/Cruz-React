import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { isSafari, isMobile } from "react-device-detect";

function Error404(){
  
  var image = isMobile || isSafari ? "404Safari" : "404"
  
  return (
    <div className="error404">
      <img src={require(`../../assets/images/${image}.png`)} alt="404 error"/>
      <h1><Trans>label.404.title</Trans></h1>
      <p><Trans>label.404.text</Trans></p>
      <Link className="hover-shadow" to="/"><Trans>label.goto.home</Trans></Link>
    </div>
    );
  };
  
  export default Error404;