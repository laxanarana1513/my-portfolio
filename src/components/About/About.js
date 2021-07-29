import React from 'react';
import classes from './About.css';
import ProfilePic from '../../assests/images/pic1.jpg';
import Fade from 'react-reveal';
// export const id = "#about"


const about = () => {
    return (
        <section id="about" className={classes.About} >

            <div className={classes.Row}>
                <Fade bottom>
                    <div className={classes.Three}>
                        <img src={ProfilePic} alt="Laxana Rana" className={classes.Pic} />
                    </div>
                </Fade>

                <Fade bottom>
                    <div className={classes.WriteUp}>
                        <h2>About Me</h2>

                        <p>
                            Hey! I am Laxana Rana an aspiring Computer Engineer. I am currently a Third Year Bachelor of Engineering student at A.D Patel Institute Of Technology, New V.V Nagar, Anand. I love to design and develop simple, beautiful and responsive websites. My hobbies include drawing and painting.
                        </p>

                        <div className={classes.Row} style={{ margin: "0px -21px" }}>
                            <div className={classes.Contact}>
                                <h2>Contact Details</h2>

                                <p>
                                    <span>Laxana Rana</span>
                                    <br />

                                    <span>
                                        Plot no. 28,Jay Raj Park-1,
                                        {window.matchMedia("(max-width: 940px)") ? null : <br />}
                                        Civil Road, Nanakwada,
                                        <br />
                                        Valsad-396001, Gujarat,
                                        <br />
                                        India.
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>

        </section>
    )
}


export default about