import React from 'react';

export class ModalManager {

    static myInstance = null;

    static getInstance() {
        if (ModalManager.myInstance == null) {
            ModalManager.myInstance = new ModalManager();
        }

        return this.myInstance;
    }


    subscribeModal(obj) {
        this._modalClass = obj
        console.log(obj)
    }

    clickRegister(){
        this._modalClass.openModal()
    }

   
}
