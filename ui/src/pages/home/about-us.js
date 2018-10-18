import React from 'react';

import { Translate } from "react-localize-redux";

import './about-us.css';

export default class AboutUs extends React.Component {

    render() {

        return (
            <section className="section about-us">
                <div className="container">
                    <h1 className="title is-1 is-spaced">
                        <Translate id="title"/>
                    </h1>
                    <p className="subtitle is-4 has-font-caveat has-text-primary">
                        <Translate id="home.about-us.slogan"/>
                    </p>
                    <p className="content is-size-6">
                        <ul>
                            <li><Translate id="home.about-us.a"/></li>
                            <li><Translate id="home.about-us.b"/></li>
                            <li><Translate id="home.about-us.c"/></li>
                        </ul>
                    </p>
                </div>
            </section>
        )
    }
}
