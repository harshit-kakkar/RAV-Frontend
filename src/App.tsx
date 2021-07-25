import React from 'react';
import './App.css';
import MainHeader from './components/mainHeader/mainHeader'
import MainSection from './components/mainSection/mainSection'

function App() {
  return (
    <div className="main-app">
      <MainHeader/>
      <MainSection />
    </div>
  );
}

export default App;
