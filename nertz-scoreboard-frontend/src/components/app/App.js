import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Rules from './Rules';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/about' element={<About />}/>
        <Route exact path ='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
