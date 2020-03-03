import React from 'react';
import './App.css';
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import MainView from "./components/mainView/MainView";
import About from "./components/about/About";

class App extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <div className="App">
                <Header/>
                <MainView/>
                <About/>
                <Gallery/>
            </div>
        );
    }
}

export default App;
