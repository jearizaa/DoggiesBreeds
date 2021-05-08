import React from 'react'
import Nav from './components/Nav/Nav'
import Catalogue from './components/Catalogue/Catalogue'
import './_App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Catalogue />
    </div>
  );
}

export default App;