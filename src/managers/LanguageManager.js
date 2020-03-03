import React from 'react';

export class LanguageManager {

    static myInstance = null;

    static getInstance() {
        if (LanguageManager.myInstance == null) {
            LanguageManager.myInstance = new LanguageManager();
        }

        return this.myInstance;
    }

    constructor() {
        this.lang = 'en';
        this.icon = '/GE.png';
        this.data = {
            'tournament.about': {
                'ka': 'ტურნირის შესახებ',
                'en': 'About tournament'
            }, 'tournament.schedule': {
                'ka': 'ჩატარების განრიგი',
                'en': 'Schedule'
            }, 'tournament.location': {
                'ka': 'ჩატარების ლოკაცია',
                'en': 'Location'
            }, 'common.register': {
                'ka': 'რეგისტრაცია',
                'en': 'Register'
            }, 'common.about.tbilisi': {
                'ka': 'თბილისის შესახებ',
                'en': 'About Tbilisi'
            }
        }
    }

    getLang() {
        return this.lang
    }

    switchLanguage() {
        if (this.lang === 'ka') {
            this.lang = 'en';
            this.icon = '/GE.png';
        } else {
            this.lang = 'ka';
            this.icon = '/GB.png';
        }
        console.log(this.lang)
    }

    getText(key) {
        return this.data[key][this.lang]
    }
}
