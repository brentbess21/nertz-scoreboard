import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Rules from './Rules';
import GameStyle from '../setup/GameStyle';
import ScoreSetup from '../setup/ScoreSetup';
import PlayerSetup from '../setup/PlayerSetup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/playersetup' element={<PlayerSetup />}/>
        <Route path='/scoresetup' element={<ScoreSetup />}/>
        <Route path='/gamestyle' element={<GameStyle />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/about' element={<About />}/>
        <Route exact path ='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
