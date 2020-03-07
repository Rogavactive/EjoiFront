import React from 'react';
import './MainView.css';

import * as Icon from 'react-bootstrap-icons';
import {LanguageManager} from "../../managers/LanguageManager";


class MainView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {transform: 'translateY(0px)' };
        this.onChange = this.onChange.bind(this);
        LanguageManager.getInstance().subscribeToLang(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onChange);
    }

    onChange(event) {
        this.setState({
            transform: 'translateY(' + Math.max(0, window.pageYOffset/2) + 'px)'
        });
    }

    render(){
        return (
            <div className="MainView">
                <img style={this.state} src={process.env.PUBLIC_URL + '/home-bg.jpg' }/>
                <div className="MainViewContent">
                    <button onClick={this.showAlert}> <Icon.DocumentText className="DocumentIcon" size="30px"/>
                        {LanguageManager.getInstance().getText('common.register')}
                    </button>
                </div>
            </div>
        );
    }

    showAlert() {
        alert("Im an alert");
    }
}

export default MainView;
