import React, {Fragment} from 'react';

import { Icon } from 'react-bulma-components';

import { withContacts } from '../context';

@withContacts
export class FollowUs extends React.Component {
    render() {
        const { facebook, twitter, youtube, vimeo } = this.props.contacts;
        return (
            <Fragment>
                {this.props.children}
                <a href={facebook} className={this.props.className}>
                    <Icon>
                        <i className="fab fa-facebook-f"/>
                    </Icon>
                </a>
                <a href={twitter} className={this.props.className}>
                    <Icon>
                        <i className="fab fa-twitter"/>
                    </Icon>
                </a>
                <a href={vimeo} className={this.props.className}>
                    <Icon>
                        <i className="fab fa-vimeo"/>
                    </Icon>
                </a>
                <a href={youtube} className={this.props.className}>
                    <Icon>
                        <i className="fab fa-youtube"/>
                    </Icon>
                </a>
            </Fragment>
        )
    }
}