import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'react-bulma-components';

import './video-preview.css';

import { connect } from 'react-redux';

import { Localized } from './localized';

class VideoPreview_ extends React.Component {

    static propTypes = {
        video: PropTypes.any.isRequired,
        withHover: PropTypes.bool
    };

    play() {
        this.props.dispatch({
            type: 'VIDEO_PLAY',
            payload: this.props.video
        })
    }

    render() {
        const { className, preview, duration, withHover } = this.props;
        const { title_en, title_uk } = this.props;
        const { description_en, description_uk } = this.props;
        const { tags_en, tags_uk } = this.props;

        const sec = duration % 60;
        const min = Math.floor(duration / 60);

        // disabled until descriptions are in place
        const hasHover = false && withHover && (description_en || description_uk);

        return (
            <article className={`video-cnt ${className||''} ${hasHover ? 'has-hover' : ''}`}>
                <div className="block video-preview">
                    <p className="video-category is-uppercase">
                        <Localized en={tags_en.join(' | ')} uk={tags_uk.join(' | ')}/>
                    </p>
                    <figure className="image is-19by9">
                        <img src={preview['1080']} alt="" key={preview['1080']}/>
                    </figure>
                    <div className="video-duration">
                        {min}:{sec > 9 ? sec : `0${sec}`}
                    </div>
                    <a className="video-play" onClick={() => this.play()}>
                        <Icon className="is-large">
                            <i className="fas fa-3x fa-play"/>
                        </Icon>
                    </a>
                </div>
                <div className="block video-details">
                    <p className="title is-4">
                        <Localized en={title_en} uk={title_uk}/>
                    </p>
                </div>
                {hasHover && <div className="block video-hover">
                    <p className="content is-size-7">
                        <Localized en={description_en} uk={description_uk}/>
                    </p>
                </div>}
            </article>
        )
    }
}

export const VideoPreview = connect()(VideoPreview_);
