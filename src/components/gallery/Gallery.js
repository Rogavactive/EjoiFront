import Swiper from 'react-id-swiper';

import React from 'react';
import './Gallery.css';
import 'swiper/css/swiper.css';
import {LanguageManager} from "../../managers/LanguageManager";

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.params = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
        LanguageManager.getInstance().subscribeToLang(this);
    }


    render() {
        return (
            <div className="Gallery">
                <div className="gallery-header">{LanguageManager.getInstance().getText("gallery.text.header")}</div>
                <Swiper {...this.params}>
                    < div className="logo-container">
                        <div className="logo">
                            <img
                                src={'https://www.robinwieruch.de/static/dbb6b6b256b589aad81a3ed374590f4d/2b1a3/banner.jpg'}
                                alt="cur" className="center"/>
                        </div>
                        <div className="gallery-text">
                            <p>{LanguageManager.getInstance().getText("gallery.text.dummy")}</p>
                        </div>

                    </div>
                    < div className="logo-container">
                        <div className="logo">
                            <img
                                src={'https://www.robinwieruch.de/static/dbb6b6b256b589aad81a3ed374590f4d/2b1a3/banner.jpg'}
                                alt="cur" className="center"
                            />
                        </div>
                        <div className="gallery-text">
                            <p>{LanguageManager.getInstance().getText("gallery.text.dummy")}</p>
                        </div>
                    </div>
                    < div className="logo-container">
                        <div className="logo">
                            <img
                                src={'https://www.robinwieruch.de/static/dbb6b6b256b589aad81a3ed374590f4d/2b1a3/banner.jpg'}
                                alt="cur"
                                className="center"
                            />
                        </div>
                        <div className="gallery-text">
                            <p>{LanguageManager.getInstance().getText("gallery.text.dummy")}</p>
                        </div>
                    </div>
                </Swiper>
            </div>
        )
    }
};
