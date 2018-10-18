import React from 'react';
import Image from 'react-retina-image';

import { Translate } from 'react-localize-redux';

import './clients.css';
import {withClients} from "../../context";

import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel";

class Clients extends React.Component {

    componentDidMount() {
        bulmaCarousel.attach();
    }

    render() {
        const { faces, logos } = this.props;

        return (
            <section className="section">
                <div className="container">
                    <div className="block">
                        <div className="block">
                            <h2 className="title is-1 is-spaced">
                                <Translate id="home.clients.header"/>
                            </h2>
                        </div>
                        <div className="block">
                            <h4 className="title is-5 is-spaced has-text-centered">
                                <Translate id="home.clients.faces"/>
                            </h4>
                            <div className="carousel carousel-animated carousel-animate-slide" data-autoplay data-size="5">
                                <div className='carousel-container'>
                                    {faces.map((face, index) => (
                                        <a href={face.link} className="carousel-item face-block" key={index} target="_blank">
                                            <div className="has-text-centered">
                                                <figure className="image is-64x64 is-inline-block is-hidden-tablet">
                                                    <Image src={"/clients/" + encodeURI(face.image)}/>
                                                </figure>
                                                <figure className="image is-128x128 is-inline-block is-hidden-mobile">
                                                    <Image src={"/clients/" + encodeURI(face.image)}/>
                                                </figure>
                                                <br/>
                                                <p className="content is-6 has-text-dark">{face.name}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="carousel-navigation is-centered is-overlay">
                                    <div className="carousel-nav-left">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </div>
                                    <div className="carousel-nav-right">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <h4 className="title is-5 is-spaced has-text-centered">
                                <Translate id="home.clients.logos"/>
                            </h4>
                            <div className="carousel carousel-animated carousel-animate-slide" data-size="5">
                                <div className='carousel-container'>
                                    {logos.map((logo, index) => (
                                        <a href={logo.link} className="carousel-item face-block" key={index} target="_blank">
                                            <div className="has-text-centered">
                                                <figure className="image is-64x64 is-inline-block is-hidden-tablet">
                                                    <Image src={"/clients/" + encodeURI(logo.image)}/>
                                                </figure>
                                                <figure className="image is-128x128 is-inline-block is-hidden-mobile">
                                                    <Image src={"/clients/" + encodeURI(logo.image)}/>
                                                </figure>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="carousel-navigation is-centered is-overlay">
                                    <div className="carousel-nav-left">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </div>
                                    <div className="carousel-nav-right">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withClients(Clients);
