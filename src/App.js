import React, { Component } from 'react';
// import Header from './components/Header/Header';
// import ReactGA from 'react-ga';
import View from './containers/View/View';
import About from './components/About/About';
import GrabCV from './components/About/GrabCV/GrabCV';
import Resume from './components/Resume/Resume';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Auxi from './hoc/Auxi';



class App extends Component {
  

  render() {
    return (
      <Auxi>
        
        <View />
        <About />
        <GrabCV />
        <Resume />
        <Experience />
        <Contact />
        <Footer />
      </Auxi>

    );
  }
}

export default App;
