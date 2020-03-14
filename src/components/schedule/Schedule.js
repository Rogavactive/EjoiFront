import React from 'react';
import './About.css';
import {LanguageManager} from "../../managers/LanguageManager";
import TrackVisibility from 'react-on-screen';

const ComponentToTrack = ({isVisible}) => {

    var class_name = "about-invisible";

    if(isVisible){
        class_name = "about-visible";
    }
    return (<div className={class_name}>{LanguageManager.getInstance().getText('about.text')}</div>);
};

class About extends React.Component {

    constructor(props, context) {
        super(props, context);
        LanguageManager.getInstance().subscribeToLang(this)
    }

    render() {
        return (
            <div className="About">
                <div className="about-header">
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="ejoi2020"/>
                </div>
                <TrackVisibility once className="about-content" >
                    <ComponentToTrack/>
                </TrackVisibility>
            </div>
        );
    }
}

export default About;

