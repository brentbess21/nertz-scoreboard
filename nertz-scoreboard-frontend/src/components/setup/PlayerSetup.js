import React from 'react';

import Header from '../app/Header';
import PlayerForm from './PlayerForm';

const PlayerSetup = () => {
    return(
        <div>
            <Header />
            <h1>This is the Player Setup Componenet</h1>
            <PlayerForm />
        </div>
    )
}

export default PlayerSetup;