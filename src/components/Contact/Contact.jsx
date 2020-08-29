import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import * as emailjs from "emailjs-com";
import validator from 'validator';

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        content: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [isSended, setIsSended] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        var newErrors = {
            name : name === "" ? "label.form.error.name.empty" : "no error",
            email : email === "" ? "label.form.error.email.empty" : "no error",
            subject : subject === "" ? "label.form.error.subject.empty" : "no error",
            content : content === "" ? "label.form.error.content.empty" : "no error"
        }

        if (!validator.isEmail(email)){
            newErrors.email = "label.format.email";
        }


        if(newErrors.name === "no error" && newErrors.email === "no error" && newErrors.subject === "no error" && newErrors.content === "no error") {
            setIsLoading(true);
            const data = {
                "name": name,
                "email": email,
                "subject": subject,
                "content": content
            };

            emailjs.send(
                    "lacruz_emailjs",
                    "lacruz_website",
                    data,
                    "user_YPYnOvgry0dAlZK0uhRRA"
                )
                .then(response => {
                    setIsLoading(false);
                    setIsSended(true);
                    setTimeout( () => {
                        setIsSended(false)
                    }, 2000);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setContent("");
                    setErrors({
                        name: "",
                        email: "",
                        subject: "",
                        content: ""
                    })
                })
                .catch(error => {
                    console.log('FAILED...', error);
                });
        } else{
            setErrors(newErrors);
        } 
    }

    return (
        <section className="contact-page">
            <h2><Trans>label.form.title</Trans></h2>
            <form onSubmit={handleSubmit} id="contact_form_class" className="form">
                <div className="contact-form">
                    <div className="reverse-form wow zoomIn">
                        {
                            ( errors.name !== "" && errors.name !== "no error" ) && 
                            <div className="error-form"><span>ERREUR</span><Trans>{ errors.name }</Trans></div>
                        }
                        <input name="name" id="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <label htmlFor="name"><Trans>label.form.name</Trans></label>
                    </div>
                    <div className="reverse-form wow zoomIn">
                        {
                            ( errors.email !== "" && errors.email !== "no error" ) && 
                            <div className="error-form"><span>ERREUR</span><Trans>{ errors.email }</Trans></div>
                        }
                        <input name="email" id="email" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <label htmlFor="email"><Trans>label.form.email</Trans></label>
                    </div>
                    <div className="reverse-form wow zoomIn">
                        {
                            ( errors.subject !== "" && errors.subject !== "no error" ) && 
                            <div className="error-form"><span>ERREUR</span><Trans>{ errors.subject }</Trans></div>
                        }
                        <input name="subject" id="subject" type="text" value={subject} onChange={(e) => {setSubject(e.target.value)}} />
                        <label htmlFor="subject"><Trans>label.form.subject</Trans></label>
                    </div>
                    <div className="reverse-form wow zoomIn">
                        {
                            ( errors.content !== "" && errors.content !== "no error" ) && 
                            <div className="error-form"><span>ERREUR</span><Trans>{ errors.content }</Trans></div>
                        }
                        <textarea name="content" id="content" value={content} onChange={(e) => {setContent(e.target.value)}} />
                        <label htmlFor="content"><Trans>label.form.content</Trans></label>
                    </div>
                </div>
                <button className="btn">
                    { isLoading ? <span className="loader"></span> : (isSended ? <i className='fas fa-check'></i> : "Envoyer") }
                </button>
            </form>
        </section>
    )
}

export default Contact