import React, { Component, Fragment } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
import Header from './components/Header'
import Register from './components/Register'
import Video from './components/Video'
import Footer from './components/Footer'
import Promo from './components/Promo'
import Body from './components/Body';


library.add(fas)

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <Body />
      <Footer /> 
      </Fragment>
   
   );
  }
}

export default App;
