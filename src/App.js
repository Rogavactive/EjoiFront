import React from 'react';
import './App.css';
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import MainView from "./components/mainView/MainView";
import About from "./components/about/About";
import Schedule from "./components/schedule/Schedule";
// import Sample from './components/register/Register';
// import Contact from './components/contact/Contact';

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
                <Schedule/>
                {/*<Gallery/>*/}
                {/*<Contact/>*/}
                {/*<Sample/>*/}
                
            </div>
        );
    }
}

export default App;
