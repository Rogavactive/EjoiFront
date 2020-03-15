import React from 'react';
import './About.css';
import {LanguageManager} from "../../managers/LanguageManager";
import TrackVisibility from 'react-on-screen';

class AboutContent extends React.Component {
    render() {
        if (this.props.isVisible) {
            this.class_name = "slide-up-visible";
        }
        return (<div className={this.class_name}>{LanguageManager.getInstance().getText('about.text')}</div>)
    };

    constructor(props) {
        super(props);
        this.class_name = "invisible";
    }

}

class AboutHeader extends React.Component {
    render() {
        if (this.props.isVisible) {
            this.class_name = "left-to-right-visible";
        }
        return (<img className={this.class_name} src={process.env.PUBLIC_URL + '/logo192.png'} alt="ejoi2020"/>)
    };

    constructor(props) {
        super(props);
        this.class_name = "invisible";
    }

}

class About extends React.Component {

    constructor(props, context) {
        super(props, context);
        LanguageManager.getInstance().subscribeToLang(this)
    }

    render() {
        return (
            <div className="About">
                <TrackVisibility once className="about-header">
                    <AboutHeader/>
                </TrackVisibility>
                <TrackVisibility once className="about-content">
                    <AboutContent/>
                </TrackVisibility>
            </div>
        );
    }
}

export default About;
