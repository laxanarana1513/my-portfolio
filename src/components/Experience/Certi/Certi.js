import React from 'react';
import classes from './Certi.css';


const certi = () => {
    return(
        <div className={classes.Certi}>
            <h3>Certificates</h3>

            <a href="https://drive.google.com/file/d/1ZD0k74XvDOiYWtVUbIB74IcBpchC9msp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className={classes.Cbutton}>Click Here To View</button>
            </a>
        </div>
    )
}

export default certi