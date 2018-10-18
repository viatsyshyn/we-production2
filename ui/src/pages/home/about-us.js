import React from 'react';

import { Translate } from "react-localize-redux";

import { ActiveLink } from '../../controls';

import { fromEvent } from 'rxjs';
import { map, debounceTime } from "rxjs/operators/index";

import './about-us.css';

export default class AboutUs extends React.Component {

    aboutUsRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            this.scroll$ = fromEvent(window, 'scroll')
                .pipe(
                    map(() => {
                        if (window.innerWidth > 960 + 64 + 64) {
                            const height = Math.ceil(window.innerWidth * .56);
                            const currentScrollPos = window.pageYOffset;
                            this.aboutUsRef.current.style.transform = `translate(0, ${currentScrollPos > 200 ? Math.min(0, currentScrollPos - height) : 0}px)`;
                            this.aboutUsRef.current.style.opacity = currentScrollPos > 200 ? Math.min(1, currentScrollPos / height * 2) : 0;
                        }
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
                    <h1 className="title is-1 is-spaced">
                        <Translate id="title"/>
                    </h1>
                    <p className="subtitle is-4 has-font-caveat has-text-primary">
                        <Translate id="home.about-us.slogan.a"/>
                        <br/>
                        <Translate id="home.about-us.slogan.b"/>
                    </p>
                    <p className="content is-size-6">
                        <ul>
                            <li><Translate id="home.about-us.a"/></li>
                            <li><Translate id="home.about-us.b"/></li>
                            <li><Translate id="home.about-us.c"/></li>
                        </ul>
                    </p>
                    <p className="content">
                        <ActiveLink to="/contact" className="button is-primary is-rounded">
                            <Translate id="buttons.order-now"/>
                        </ActiveLink>
                    </p>
                </div>
            </section>
        )
    }
}
