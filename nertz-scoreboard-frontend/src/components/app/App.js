import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route exact path ='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
