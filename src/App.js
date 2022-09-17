import './App.css';

import { Route, BrowserRouter as Router, Switch, Routes } from 'react-router-dom'
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import { useState } from 'react';


function App() {

  const [section, setsection] = useState(0)
  const [section1, setsection1] = useState('')
  const [section2, setsection2] = useState('')
  const [section3, setsection3] = useState('')
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' exact element={<MainPage setsection1={setsection1} setsection2={setsection2} setsection3={setsection3} setsection={setsection}/>} />
            <Route path='/rfid' element={<SecondPage section1={section1} section2={section2} section3={section3} section={section}/>} />
          </Routes>
        </header>
      </div>
    </Router>

  );
}

export default App;
