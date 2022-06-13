import React from 'react';
import classes from './Skills.css';
// import { Fade } from 'react-reveal';
import S1 from "../../../assests/images/S1.png"
import S2 from "../../../assests/images/S2.png"
import S3 from "../../../assests/images/S3.jfif"
import S4 from "../../../assests/images/S4.png"
import S5 from "../../../assests/images/S5.png"
import S6 from "../../../assests/images/S6.jpg"
import S7 from "../../../assests/images/S7.png"
import S8 from "../../../assests/images/S8.png"
import S9 from "../../../assests/images/S9.png"
import S10 from "../../../assests/images/S10.jpg"
import S11 from "../../../assests/images/S11.png"
import S12 from "../../../assests/images/S12.png"

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
                                    <img src={S2} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S3} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S4} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S5} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S6} alt="" />
                                </div>
                            </div>

                            <div className="row" >

                                <div className={classes.Skill}>
                                    <img src={S7} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S8} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S9} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S10} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S11} alt="" />
                                </div>
                                <div className={classes.Skill}>
                                    <img src={S12} alt="" />
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