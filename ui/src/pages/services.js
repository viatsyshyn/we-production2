import React from 'react';

import { Translate } from 'react-localize-redux';

import { ActiveLink } from "../controls";

import PageWithMenu from '../layout/page-with-menu';

import Project from './services/project';
import Crew from './services/crew';
import Drone from './services/drone';
import Multicam from './services/multicam';

import './services/index.css'
export default class Services extends React.Component {
    state = {
        services: ['project', 'crew', 'drone', 'multicam']
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { services } = this.state;
        const { params = {} } = this.props.match;
        const { service = services[0] } = params;

        return (
            <PageWithMenu menu={services.map(to => (
                                <li key={to}>
                                    <ActiveLink to={`/services/${to}`}
                                                className={to === service ? 'is-active' : ''}
                                                onNavigate={() => window.scrollTo(0, 0)}
                                    >
                                        <Translate id={`services.${to}.header`}/>
                                    </ActiveLink>
                                </li>
                            ))}
                          chapter={<Translate id="services.link"/>}
                          className={`service-bg ${service}-bg`}
            >
                <div className="columns">
                    <div className="column is-three-quarters-desktop is-full-touch">
                        {{
                            project: <Project/>,
                            crew: <Crew/>,
                            drone: <Drone/>,
                            multicam: <Multicam/>
                        }[service]}
                    </div>
                </div>
            </PageWithMenu>
        )
    }
}