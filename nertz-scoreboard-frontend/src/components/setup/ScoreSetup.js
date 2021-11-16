import React from "react";
import { Link } from "react-router-dom";

import Header from "../app/Header";

const ScoreSetup = () => {
    return(
        <div>
            <Header />
            <h1>What Should the Winning Score Be?</h1>
            <Link to='/gamestyle' className='link-button'>Back</Link>
            <input 
                type='number'
                defaultValue='100'
                step='10'
                min='10'
            />
            <Link to='/playersetup' className='link-button'>Enter</Link>
        </div>
    )
}

export default ScoreSetup;