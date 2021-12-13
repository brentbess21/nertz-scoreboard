import React from 'react';

import Header from './Header';

const Error = (props)=> {
    return(
        <div>
            <Header />
            <main className='grid-container'>
                <h1>Uh Oh! There was nothing found!</h1>
            </main>
        </div>
    )
}

export default Error;