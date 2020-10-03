import React from "react";
import { Trans } from "react-i18next";
import { Helmet } from "react-helmet";
import i18n from 'i18next';

function Legal(){

    const language = i18n.language;
    const title = (language === "fr" ? "Mentions légales" : "Legals") + " | LACRUZ";

    return(
        <section className="legal">
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
            </Helmet>

            <h1><Trans>label.legal.title</Trans></h1>
            <p><Trans>label.legal.title.text</Trans></p>
            
            <hr />

            <h2><Trans>label.legal.edit</Trans></h2>
            <p><Trans>label.legal.edit.text</Trans> 853 <span>155</span> 968.</p>

            <hr />
            
            <h2><Trans>label.legal.publication</Trans></h2>
            <p><Trans>label.legal.publication.text</Trans></p>

            <hr />
            
            <h2><Trans>label.legal.host</Trans></h2>
            <p><Trans>label.legal.host.text</Trans></p>

            <hr />
            
            <h2><Trans>label.legal.contact</Trans></h2>
            <p><Trans>label.legal.contact.text</Trans></p>

            <hr />
            
            <h2><Trans>label.legal.cnil</Trans></h2>
            <p><Trans>label.legal.cnil.text</Trans></p>
        </section>
    );
}


export default Legal;