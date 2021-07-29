import React from 'react';
import classes from './GrabCV.css';
import { Fade } from 'react-reveal';

const grabCV = () => {
    return (
        <section className={classes.Stats} >

            <div className="container">
                
                <div className="row">
                    <Fade bottom>
                    <div className={classes.Cv}>
                        <h3>Check Out My Resume</h3>
                        <button type="button" className="btn btn-lg">
                            <img src="https://img.icons8.com/ios/30/ffffff/open-resume.png" alt="" />
                            Grab A Copy
                        </button>
                    </div>
                    </Fade>
                </div>
                
            </div>
        </section>
    )
}

export default grabCV