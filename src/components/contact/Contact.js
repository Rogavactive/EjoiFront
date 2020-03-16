import React from 'react';
import './Contact.css';
import {LanguageManager} from "../../managers/LanguageManager";
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        LanguageManager.getInstance().subscribeToLang(this);
    }
    render(){
        return (
            <div className="Contact">
                <div className = "Contact-about"> 

                </div>
                <div className = "Contact-map">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyAmP759pVfEz2tC_1QQYWusXnROUwJ-GUc"
                >
                    <GoogleMap
                    id='example-map'

                    >
                    </GoogleMap>
                </LoadScript>
                </div>
            </div>
        );
    }


}

export default Contact;
