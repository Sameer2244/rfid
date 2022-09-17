import './App.css';

import { Route, BrowserRouter as Router, Switch, Routes } from 'react-router-dom'
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import { useState } from 'react';


function App() {

  const [section, setsection] = useState(0)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' exact element={<MainPage setsection={setsection}/>} />
            <Route path='/rfid' element={<SecondPage section={section}/>} />
          </Routes>
        </header>
      </div>
    </Router>

  );
}

export default App;
