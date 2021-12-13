import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Rules from './Rules';
import GameStyle from '../setup/GameStyle';
import ScoreSetup from '../setup/ScoreSetup';
import RoundsSetup from '../setup/RoundsSetup';
import PlayerSetup from '../setup/PlayerSetup';
import GameSetup from '../setup/GameSetup';
import Games from '../game/Games';
import Game from '../game/Game';
import ScoreBoard from '../game/ScoreBoard';
import Error from './Error';



function App() {
  return (
    <div>
      <Routes>
        <Route path='games_list/:gameId/play' element= {<ScoreBoard />}/> 
        <Route path='games_list/:gameId' element={<Game />}/>
        <Route path='games_list' element = {<Games />}/>
        <Route path='game_setup' element = {<GameSetup />} />
        <Route path='player_setup' element={<PlayerSetup />}/>
        <Route path ='rounds_setup' element={<RoundsSetup />} />
        <Route path='score_setup' element={<ScoreSetup />}/>
        <Route path='gamestyle' element={<GameStyle />}/>
        <Route path='rules' element={<Rules />}/>
        <Route path='about' element={<About />}/>
        <Route exact path ='/' element={<Home />}/>
        <Route path="*" element= {<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
