import React, { Component, Fragment } from 'react';

import Showreel from './home/showreel';
import AboutUs from './home/about-us';
import Portfolio from './home/portfolio';
import Services from './home/services';
import Production from './home/production';
import Crew from './home/crew';
import Clients from './home/clients';
import Contacts from './home/contacts';
import Feedback from './home/feedback';

import { connect } from "react-redux";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const {videos, feedback} = this.props;
        const showreel = videos.filter(video => ~video.categories.indexOf('showreel')).shift();
        const featured = videos.filter(video => ~video.categories.indexOf('featured')).slice(0, 2);
        return (
            <Fragment>
                <Showreel {...showreel}/>
                <AboutUs/>
                <Portfolio blog={featured}/>
                <Services/>
                <Production/>
                <Crew/>
                <Feedback feedback={feedback}/>
                <Clients/>
                <Contacts />
            </Fragment>
        )
    }
}

export default connect(
    (state) => ({
        videos: state.videos,
        feedback: state.feedback
    })
)(Home);
