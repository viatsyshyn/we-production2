import React from 'react';

import Image from 'react-retina-image';
import { Translate } from "react-localize-redux";

import { VideoPreview, ActiveLink } from "../../controls";

import reveal from 'scrollreveal';

const sr = reveal();

export default class AboutUs extends React.Component {

    state = {
        categories: ['promotion', 'corporate', 'social', 'sport', 'music', 'concerts']
    };

    componentDidMount() {
        const nodes = this.categoryRefs.map(x => x.current);
        sr.reveal(nodes, { duration: 1000, mobile: false }, 50);
    }

    render() {
        const { categories } = this.state;
        const { blog } = this.props;
        this.categoryRefs = categories.map(() => React.createRef());

        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-variable is-8">
                        <div className="column">
                            <div className="block">
                                <h2 className="title is-1 is-spaced">
                                    <Translate id="headers.we-production"/>
                                </h2>
                                <p className="content is-size-6">
                                    <Translate id="home.about-us"/>
                                </p>
                            </div>
                            <div className="block">
                                <div className="columns is-variable is-0 is-multiline is-fullwidth is-mobile">
                                    {categories.map((category, index) => (
                                        <div key={category} ref={this.categoryRefs[index]} className="column is-half-mobile is-one-third-tablet has-text-centered" style={{padding: '3rem 1rem'}}>
                                            <ActiveLink to={`/videos/${category}`} className="block has-text-dark home-video-category-reveal">
                                                <figure className="image is-48x48 is-inline-block">
                                                    <Image src={`/categories/video-${encodeURI(category)}.png`}/>
                                                </figure>
                                                <p className="title is-4">
                                                    <Translate id={`video.categories.${category}`}/>
                                                </p>
                                            </ActiveLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="column is-narrow is-hidden-touch">
                            <div className="desktop-410">
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent is-vertical">
                                        {blog.map(model => (
                                            <VideoPreview key={model.video} className="tile is-child" {...model}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}