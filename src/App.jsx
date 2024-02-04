// @Author Alhaan Ahmed
import React from 'react';
import Navbar from './components/common/Navbar/main'
import './App.css';
import MainBody from './components/common/Main/main';

class App extends React.Component {
  // Renders the components
  // React.Component is the main class where its child class App extends
  render() {
    return (
      <>
          <Navbar />
          <MainBody />
      </>
    );
  }
}

export default App;
