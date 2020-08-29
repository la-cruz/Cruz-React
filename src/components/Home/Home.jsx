import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import Particles from 'react-particles-js'
import particlesOptions from '../../data/particles.json'
import {ReactComponent as ReactLogo} from '../../assets/images/undraw_progressive_app_m9ms_grey.svg';
import tools from "../../data/tools.json"
import projects from "../../data/projects.json"
import useSessionStorage from '../../lib/useSessionStorage'
import handleScroll from '../../lib/handleScroll'
import { Link } from 'react-router-dom';
import { TimelineMax, Power2 } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap';
import gsap from 'gsap/gsap-core';
import { isSafari } from 'react-device-detect';

function Home() {
    const [isAnimation, setIsAnimation] = useSessionStorage('animation', false)

    console.log(<Particles/>)

    useEffect(() => {
        const logo = document.querySelector(".cruz-logo > img")
        const title = document.querySelector(".main-title")
        const desc = document.querySelector(".main-desc")

        if(isSafari) {
            document.querySelector(".img-group").classList.add("safari")
        }

        if(!isAnimation && window.innerWidth > 1200) {
            gsap.registerPlugin(CSSPlugin)

            logo.style.transition = "1s";
            title.style.transition = "0.3s";
            desc.style.transition = "0.3s";

            handleScroll.disableScroll();

            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }

            new TimelineMax({delay: 0.3}).to(logo, {duration: 1, width: '25%'},)
                .to(logo, {duration: 1, opacity: '1'})
                .to(logo, {duration: 0.1, width: '5%', ease: Power2.easeInOut})
                .to(logo, {duration: 0.5, left: '5%', ease: Power2.easeInOut}, "-=0.2")
                .to(logo, {duration: 0.5, top: '5%', ease: Power2.easeInOut}, "-=0.4")
                .to(title, {duration: 1, left: '0%', ease: Power2.easeInOut})
                .to(desc, {duration: 1, left: '0%', ease: Power2.easeInOut})
                .eventCallback("onComplete", handleScroll.enableScroll)
            ;

            setIsAnimation(true)
        } else if(window.innerWidth > 1200) { 
            logo.style.width = "5%";
            logo.style.left = "5%";
            logo.style.top = "5%";
            logo.style.opacity = "1";

            title.style.right = "0%";
            desc.style.left = "0%";
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
    }, [])

    return (
        <>
            <section className="page-header home">
                <Particles id="particles-js" params={particlesOptions}/>
                <h1 className="main-title">la cruz</h1>
                <p className="main-desc"><Trans>label.subtitle</Trans></p>
            </section>

            <section className="intro">
                <div className="intro-content">
                    <h2 className="wow fadeInUp"><Trans>label.title.about</Trans></h2>
                    <div className="presentation">
                        <p className="wow fadeInUp">
                            <Trans>label.association.description</Trans>
                        </p>
                        <ReactLogo />
                    </div>
                </div>
            </section>

            <div className="img-group"></div>

            <section className="production">
                <h2 className="wow fadeInUp"><Trans>label.title.productions</Trans></h2>
                <input type="radio" className="collapse-checkbox" id="prod-web" name="prod-choice" defaultChecked={true} />
                <input type="radio" className="collapse-checkbox" id="prod-jv" name="prod-choice" />
                <div className="choose-box wow fadeInUp">
                    <label htmlFor="prod-web" className="label-prod-web">
                        <p><Trans>label.title.web</Trans></p>
                    </label>
                    <label htmlFor="prod-jv" className="label-prod-jv">
                        <p><Trans>label.title.jv</Trans></p>
                    </label>
                </div>
                <section className="production-list production-list-web wow fadeInUp">
                    {
                        projects.web.filter(elem => elem.is_home).map(project => (
                            <div key={project.name}>Card projet à faire</div>
                        ))
                    }
                </section>
                <section className="production-list production-list-jv wow fadeInUp">
                    {
                        projects.jv.filter(elem => elem.is_home).map(project => (
                            <div key={project.name}>Card projet à faire</div>
                        ))
                    }
                </section>
            </section>

            <section className="tools">
                <h2 className="wow fadeInUp"><Trans>label.title.tools</Trans></h2>
                <input type="radio" className="collapse-checkbox" id="tools-web" name="tools-choice" defaultChecked={true} />
                <input type="radio" className="collapse-checkbox" id="tools-jv" name="tools-choice" />
                <div className="choose-box wow fadeInUp">
                    <label htmlFor="tools-web" className="label-tools-web">
                        <p><Trans>label.title.web</Trans></p>
                    </label>
                    <label htmlFor="tools-jv" className="label-tools-jv">
                        <p><Trans>label.title.jv</Trans></p>
                    </label>
                </div>
                <section className="tools-list tools-list-web wow fadeInUp">
                    {
                        tools.web.filter(elem => elem.is_home).map(tool => (
                            <a href={tool.url} className="logo-tool" target="_blank" rel="noopener" aria-label={`logo for ${tool.name}`} key={tool.name}>
                                <img src={ require(`../../assets/images/tools/${tool.img_src}`) } />
                            </a>
                        ))
                    }
                </section>
                <section className="tools-list tools-list-jv wow fadeInUp">
                    {
                        tools.jv.filter(elem => elem.is_home).map(tool => (
                            <a href={tool.url} className="logo-tool" target="_blank" rel="noopener" aria-label={`logo for ${tool.name}`} key={tool.name}>
                                <img src={ require(`../../assets/images/tools/${tool.img_src}`) } />
                            </a>
                        ))
                    }
                </section>
            </section>
        </>
    )
}

export default Home