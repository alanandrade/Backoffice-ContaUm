import React, { Component } from 'react';

//Fonts e Font-awesome
import './lib/font-awesome.min.css';
import './fonts/fontawesome-webfont.svg';

//Estrutura
import Header from './components/header/header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerBox">
          <Header />
        </div>

        <div className="contentBox">
          {this.props.children} {/*Adiciona pages,  filhos de app definido em index.js*/}
        </div>
      </div>

    );
  }
}

export default App;
