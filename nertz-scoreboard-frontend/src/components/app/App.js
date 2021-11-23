import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Rules from './Rules';
import GameStyle from '../setup/GameStyle';
import ScoreSetup from '../setup/ScoreSetup';
import RoundsSetup from '../setup/RoundsSetup';
import PlayerSetup from '../setup/PlayerSetup';
import Games from '../game/Games';



function App() {
  return (
    <div>
      <Routes>
        <Route path = '/games' element = {<Games />} />
        <Route path='/player_setup' element={<PlayerSetup />}/>
        <Route path ='/rounds_setup' element={<RoundsSetup />} />
        <Route path='/score_setup' element={<ScoreSetup />}/>
        <Route path='/gamestyle' element={<GameStyle />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/about' element={<About />}/>
        <Route exact path ='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
