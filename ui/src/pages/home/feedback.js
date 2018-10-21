import React from 'react';

import { Translate } from 'react-localize-redux';
import Image from 'react-retina-image';
import { Localized } from '../../controls';

import './feedback.css';
import {withFeedback} from "../../context";

import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class Feedback extends React.Component {

    componentDidMount() {
        bulmaCarousel.attach('.feedback .carousel');
    }

    render() {
        const feedback = shuffle(this.props.feedback || []);

        return (
            <section className="section feedback">
                <div className="container">
                    <div className="block" style={{marginBottom: '4rem'}}>
                        <h2 className="title is-1">
                            <Translate id="home.feedback"/>
                        </h2>
                    </div>
                    <div className="block">
                        <div className="carousel carousel-animated carousel-animate-slide" data-autoplay data-delay="15000">
                            <div className='carousel-container'>
                                {feedback.map((active) => (
                                    <div className="carousel-item">
                                        <article className="media">
                                            <figure className="media-left">
                                                <p className="image is-64x64 is-hidden-tablet">
                                                    <Image src={`/clients/${active.face}`}/>
                                                </p>
                                                <p className="image is-128x128 is-hidden-mobile is-hidden-desktop">
                                                    <Image src={`/clients/${active.face}`}/>
                                                </p>
                                                <p className="image is-144x144 is-hidden-touch">
                                                    <Image src={`/clients/${active.face}`}/>
                                                </p>
                                            </figure>
                                            <div className="media-content feedback-content">
                                                <div className="content">
                                                    <h3 className="subtitle is-4">
                                                        <Localized en={active.name_en} uk={active.name_uk}/>
                                                    </h3>
                                                    <h4 className="subtitle is-5 has-font-caveat">
                                                        <Localized en={active.position_en} uk={active.position_uk}/>
                                                    </h4>
                                                    <cite>
                                                        <i className="fas fa-quote-left fa-xs fa-pull-left has-text-primary"/>
                                                        <br/>
                                                        {active.message}
                                                        <br/>
                                                        <i className="fas fa-quote-right fa-xs fa-pull-right has-text-primary"/>
                                                    </cite>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                            <div className="carousel-navigation is-centered">
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
            </section>
        );
    }
}

export default withFeedback(Feedback);
