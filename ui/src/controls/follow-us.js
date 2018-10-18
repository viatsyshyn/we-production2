import React, {Fragment} from 'react';

import { Icon } from 'react-bulma-components';

import { withContacts } from '../context';

import * as RGA from 'react-ga';

class FollowUs_ extends React.Component {

    track(action) {
        RGA.event({
            category: this.props.location || 'Follow Us',
            action
        });
    }

    render() {
        const { facebook, instagram, youtube, vimeo } = this.props.contacts;
        return (
            <Fragment>
                {this.props.children}
                <a href={facebook} className={this.props.className} target="_blank" onClick={() => this.track('Facebook')}>
                    <Icon>
                        <i className="fab fa-facebook-f"/>
                    </Icon>
                </a>
                <a href={instagram} className={this.props.className} target="_blank" onClick={() => this.track('Twitter')}>
                    <Icon>
                        <i className="fab fa-instagram"/>
                    </Icon>
                </a>
                <a href={vimeo} className={this.props.className} target="_blank" onClick={() => this.track('Vimeo')}>
                    <Icon>
                        <i className="fab fa-vimeo"/>
                    </Icon>
                </a>
                <a href={youtube} className={this.props.className} target="_blank" onClick={() => this.track('Youtube')}>
                    <Icon>
                        <i className="fab fa-youtube"/>
                    </Icon>
                </a>
            </Fragment>
        )
    }
}

export const FollowUs = withContacts(FollowUs_);
