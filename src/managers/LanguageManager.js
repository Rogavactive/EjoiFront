import React from 'react';

export class LanguageManager {

    static myInstance = null;
    _subscribers = [];

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
            }, 'about.text': {
                'ka': 'ქართული ტექსტი ასდ ა დსა. ასდ ას,დდ,ასდ,ასდა,სდ,ას,და და,სდ ,ასდ, ას,დ ,ასდ ,ასს,დ ,ას,დ ,ასს,დ ა' +
                    'ას,დ ,სად, ,ასდ, ,ასდ, ,ას,დ ,,ასდ, ,ასს,დ, ა,სსდ, ,ასდ, ,ასდ, ,ას,დ ,ას,დ, ას,დ ,ა' +
                    'დ, ას,და,სდ, ,ასდ, ,ასდ, ,ას,დ,ას,დ ,სა,დ ,ას,დ ,ას,დ ,ას,სფ,დფ, ა,ფჰგფ, ფ,გფ,სდფ ,სდ,ფ' +
                    ' ,დს,ფა,სფ ,აფდგ,ფდა,სგფ,ფ ,დსგ,ას,ფ ა,დფ,ა ,ფგდფ, აფ,გა,ს ,გფ,დგ ,აფჰდ,გფ, ადგ' +
                    'ა,ზდგ ა,ფდფ, ა,სდფგდფ, ზ,ცგ,ფ',
                'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                    '                        labore\n' +
                    '                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
                    '                        ut\n' +
                    '                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
                    '                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                    '                        culpa qui officia deserunt mollit anim id est laborum.\n' +
                    '                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                    '                        labore\n' +
                    '                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
                    '                        ut\n' +
                    '                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
                    '                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
                    '                        culpa qui officia deserunt mollit anim id est laborum.'
            }
        }
    }

    getLang() {
        return this.lang
    }

    subscribeToLang(obj) {
        this._subscribers.push(obj)
    }

    switchLanguage() {
        if (this.lang === 'ka') {
            this.lang = 'en';
            this.icon = '/GE.png';
        } else {
            this.lang = 'ka';
            this.icon = '/GB.png';
        }
        for (let obj of this._subscribers) {
            obj.forceUpdate()
        }
    }

    getText(key) {
        return this.data[key][this.lang]
    }
}
