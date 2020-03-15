import React from 'react';
import './Schedule.css';
import {LanguageManager} from "../../managers/LanguageManager";
import TrackVisibility from "react-on-screen";

class DateBubble extends React.Component {

    constructor(props) {
        super(props);
        this.circle_class_name = "progress-ring-circle";
        this.inside_class_name = "bubble-inside";
    }

    render() {
        if (this.props.isVisible) {
            this.circle_class_name = "progress-ring-circle progress-ring-circle-visible";
            this.inside_class_name = "bubble-inside bubble-inside-visible";
        }
        return (
            <div className="bubble-container">
                <svg
                    className="progress-ring"
                    width="110"
                    height="110">
                    <circle
                        className={this.circle_class_name}
                        stroke="#ff1744"
                        stroke-width="4"
                        fill="transparent"
                        r="50"
                        cx="55"
                        cy="55"/>
                </svg>
                <div className={this.inside_class_name}>
                    <p className="bubble-date">{this.props.date}</p>
                    <p className="bubble-month">{this.props.month}</p>
                </div>
            </div>
        )
    }
}

class AboutContent extends React.Component {

    constructor(props) {
        super(props);
        this.class_name = this.props.className;
    }

    render() {
        console.log(this.props.isVisible, this.class_name);
        if (this.props.isVisible) {
            this.class_name = "schedule-text schedule-text-visible";
        }
        return (<div className={this.class_name}>{this.props.text}</div>)
    }
}

class ScheduleDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isSmall: false}
        this.adjustToWidth();
        let thisClass = this;
        thisClass.adjustToWidth();
        window.addEventListener('resize', () => {
            thisClass.adjustToWidth()
        })
    }

    adjustToWidth() {
        if (window.screen.width >= 1000) {
            this.class_name = "schedule-text";
        } else {
            this.class_name = "schedule-text schedule-text-visible";
        }
        if (window.screen.width >= 1000) {
            this.setState({
                isSmall: false
            });
        } else {
            this.setState({
                isSmall: true
            });
        }
    }

    render() {
        console.log(this.state.isSmall, this.class_name)
        return (!this.state.isSmall ?
            <TrackVisibility once className="schedule-item">
                <DateBubble date={this.props.date} month={this.props.month}/>
                <AboutContent className={this.class_name} text={this.props.text}/>
            </TrackVisibility>
            :
            <div className="schedule-item">
                <TrackVisibility once>
                    <DateBubble date={this.props.date} month={this.props.month}/>
                </TrackVisibility>
                <AboutContent className={this.class_name} text={this.props.text}/>
            </div>);
    }

}

class Schedule extends React.Component {

    constructor(props, context) {
        super(props, context);
        LanguageManager.getInstance().subscribeToLang(this)
    }

    render() {
        return (
            <div className="Schedule">
                <ScheduleDate date="15" month={LanguageManager.getInstance().getText("month.february")}
                              text={LanguageManager.getInstance().getText('about.text')}/>
                <ScheduleDate date="15" month={LanguageManager.getInstance().getText("month.february")}
                              text={LanguageManager.getInstance().getText('about.text')}/>
                <ScheduleDate date="15" month={LanguageManager.getInstance().getText("month.february")}
                              text={LanguageManager.getInstance().getText('about.text')}/>
                <ScheduleDate date="15" month={LanguageManager.getInstance().getText("month.february")}
                              text={LanguageManager.getInstance().getText('about.text')}/>
            </div>
        );
    }
}

export default Schedule;

