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
                                <a href="https://drive.google.com/file/d/1ooW8xedGRO_aAi3T45wtLZLjXqYRwV25/view?usp=sharing" target="_blank" without rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios/30/ffffff/open-resume.png" alt="" />
                                    Grab A Copy
                                </a>
                            </button>
                        </div>
                    </Fade>
                </div>

            </div>
        </section>
    )
}

export default grabCV