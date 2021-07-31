import React from 'react';
import './App.css';
import MainHeader from './components/mainHeader/mainHeader'
import MainSection from './components/mainSection/mainSection'
import {rootReducer} from './reducers/index';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <Router>
      <div className="main-app">
        <MainHeader/>
        <MainSection />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
