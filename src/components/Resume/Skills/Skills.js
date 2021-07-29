import React from 'react';
import classes from './Skills.css';
// import { Fade } from 'react-reveal';

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

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconHTML}>
                                    <span className={classes.CodeconSkillArea}>HTML</span>
                                    <span className={classes.PercentText}>100%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconCSS}>
                                    <span className={classes.CodeconSkillArea}>CSS/Bootstrap</span>
                                    <span className={classes.PercentText}>98%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconReact}>
                                    <span className={classes.CodeconSkillArea}>React JS</span>
                                    <span className={classes.PercentText}>80%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconJS}>
                                    <span className={classes.CodeconSkillArea}>Javascript</span>
                                    <span className={classes.PercentText}>75%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconCC}>
                                    <span className={classes.CodeconSkillArea}>C++ </span>
                                    <span className={classes.PercentText}>89%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconC}>
                                    <span className={classes.CodeconSkillArea}>C</span>
                                    <span className={classes.PercentText}>89%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconJAVA}>
                                    <span className={classes.CodeconSkillArea}>JAVA </span>
                                    <span className={classes.PercentText}>65%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconPython}>
                                    <span className={classes.CodeconSkillArea}>Python </span>
                                    <span className={classes.PercentText}>50%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconSQL}>
                                    <span className={classes.CodeconSkillArea}>SQL </span>
                                    <span className={classes.PercentText}>90%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconAlgo}>
                                    <span className={classes.CodeconSkillArea}>Algorithms</span>
                                    <span className={classes.PercentText}>75%</span>
                                </div>
                            </div>

                            <div className={classes.CodeconSkillbar}>
                                <div className={classes.CodeconCyber}>
                                    <span className={classes.CodeconSkillArea}>Cyber-Security</span>
                                    <span className={classes.PercentText}>50%</span>
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