import React from 'react';
import classes from './Certi.css';


const certi = () => {
    return(
        <div className={classes.Certi}>
            <h3>Certificates</h3>

            <a href="https://drive.google.com/drive/folders/1zradjKjbybpv_jyAJLbZDKB5hueujfvs" target="_blank" rel="noopener noreferrer">
                <button className={classes.Cbutton}>Click Here To View</button>
            </a>
        </div>
    )
}

export default certi