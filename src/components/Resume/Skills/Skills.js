import React from 'react';
import classes from './Skills.css';
// import { Fade } from 'react-reveal';
import S1 from "../../../assests/images/S1.png"

const skills = () => {
    return (
        <div className="container" style={{ marginBottom: "48px", paddingBottom: "24px" }}>

            <div className="row">

                <div className="col-md-3"
                    style={{
                        textAlign: window.matchMedia("(min-width: 768px)") ? "center" : null,
                        marginBottom: "24px"
                    }}>
                    <h3>
                        <span className={classes.Span}>Skills</span>
                    </h3>

                </div>

                <div className="col-md-9">
                    <div className={classes.Item}>
                        <h4 className={classes.SubHead}>Here are the skills and technologies that I have worked with and has a indepth knowledge: </h4>
                        <div id="codeconSkills">
                            <div className="row" >

                                <div className={classes.Skill}>
                                    <img src={S1} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default skills