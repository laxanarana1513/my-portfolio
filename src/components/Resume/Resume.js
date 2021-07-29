import React from 'react';
import classes from './Resume.css';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import { Fade } from 'react-reveal';

const resume = () => {
    return (
        <section id="resume" className={classes.Resume}>
            <div className="container" style={{ marginBottom: "42px", paddingBottom: "24px" }}>
                <Fade left>
                    <div className="row">

                        <div className="col-md-3"
                            style={{
                                textAlign: window.matchMedia("(min-width: 768px)") ? "center" : null,
                                marginBottom: "24px"
                            }}>
                            <h3>
                                <span className={classes.Span}>Education</span>
                            </h3>

                        </div>

                        <div className="col-md-9">
                            <div className={classes.Item}>
                                <h4 className={classes.SubHead}>Bachelor Of Computer Engineering</h4>
                                <h5 className={classes.SubLower}>2019 - 2023 (Present)</h5>
                                <p className={classes.SubPara}><em>A.D Patel Institute Of Technology, Anand, Gujarat</em></p>
                                <p style={{ fontFamily: `sans-serif` }}>Currently pursuing my Bachelor's at A.D Patel Institute Of Technology that is an esteemed college under GTU University</p>
                            </div>

                            <div className={classes.Item}>
                                <h4 className={classes.SubHead}>Higher Secondary School</h4>
                                <h5 className={classes.SubLower}>2018 - 2019</h5>
                                <p className={classes.SubPara}><em>Saraswati International School, Valsad, Gujarat</em></p>
                                <p style={{ fontFamily: `sans-serif` }}>Completed my Higher Secondary Education from Saraswati International School, Valsad - CBSE Board with reputed percentage</p>
                            </div>

                            <div className={classes.Item}>
                                <h4 className={classes.SubHead}>Secondary School</h4>
                                <h5 className={classes.SubLower}>2017 - 2018</h5>
                                <p className={classes.SubPara}><em>Saraswati International School, Valsad, Gujarat</em></p>
                                <p style={{ fontFamily: `sans-serif` }}>Completed my Secondary Education from Saraswati International School, Valsad - CBSE Board scoring 10 CGPA</p>
                            </div>

                        </div>
                    </div>
                </Fade>


            </div>
            <Skills />
            <Works />
        </section>
    )
}

export default resume