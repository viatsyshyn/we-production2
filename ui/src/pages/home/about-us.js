import React from 'react';

import { Translate } from "react-localize-redux";

import { ActiveLink } from '../../controls';

import { fromEvent, merge } from 'rxjs';
import { map } from "rxjs/operators/index";

import './about-us.css';

const scrollThreshold = 200;

export default class AboutUs extends React.Component {

    aboutUsRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            this.scroll$ = merge(
                fromEvent(window, 'scroll'),
                fromEvent(window, 'resize')
            )
                .pipe(
                    map(() => {
                        const height = Math.ceil(window.innerWidth * .56) + 4;
                        const currentScrollPos = window.pageYOffset;
                        let translateY = 0;
                        let opacity = 1;
                        let paddingTop = 0;
                        if (window.innerWidth > 960 + 64 + 64 && height > window.innerHeight * .9) {
                            translateY = currentScrollPos > scrollThreshold ? Math.min(0, currentScrollPos - height) : 0;
                            opacity = currentScrollPos > scrollThreshold
                                ? Math.min(1, (currentScrollPos - scrollThreshold) / (height - scrollThreshold - 100))
                                : 0;
                            paddingTop = currentScrollPos > scrollThreshold ?
                                8 * (1 - Math.min(1, (currentScrollPos - scrollThreshold) / height))
                                : 0;
                        }

                        this.aboutUsRef.current.style.transform = `translate(0, ${translateY}px)`;
                        this.aboutUsRef.current.style.opacity = opacity;
                        this.aboutUsRef.current.style.paddingTop = `${15 + paddingTop}vw`;
                    })
                )
                .subscribe();
        }, 100)
    }

    componentWillUnmount() {
        this.scroll$.unsubscribe();
    }

    render() {

        return (
            <section className="section about-us" ref={this.aboutUsRef}>
                <div className="container">
                    <h1 className="title is-1" style={{fontSize: '4rem'}}>
                        <Translate id="title"/>
                    </h1>
                    <p className="subtitle is-4 has-font-caveat has-text-primary">
                        <Translate id="home.about-us.slogan.a"/>
                        <br/>
                        <Translate id="home.about-us.slogan.b"/>
                    </p>
                    <p className="content is-size-5" style={{marginTop: '3rem'}}>
                        <ul>
                            <li><Translate id="home.about-us.a"/></li>
                            <li><Translate id="home.about-us.b"/></li>
                            <li><Translate id="home.about-us.c"/></li>
                        </ul>
                    </p>
                    <p className="content">
                        <ActiveLink to="/contact" className="button is-primary is-rounded is-wide" >
                            <Translate id="buttons.order-now"/>
                        </ActiveLink>
                    </p>
                </div>
            </section>
        )
    }
}
