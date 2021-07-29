import React from 'react';
import classes from './HeaderText.css';
import Fade from "react-reveal";
// import { LightSpeed } from 'react-reveal';

const headerText = (props) => (
    <div className="container-fluid" style={{ color: 'white', width: "82%" }}>
        <Fade bottom>
            <h1 className={classes.Heading}>Laxana Rana</h1>
        </Fade>

        <Fade bottom duration={1200}>
            <h3 className={classes.SubHeading}>
                I am a computer engineer and I used React Js to develop pages. This project is my portfolio website giving details of my skills, works and experience.
            </h3>
        </Fade>

        <hr />

        <Fade bottom duration={2000}>
            <div className={classes.Buttons}>
                <a href="https://github.com/laxanarana1513/my-portfolio" className="btn btn-lg" target="_blank" rel="noopener noreferrer">
                    
                    <img src="https://img.icons8.com/metro/18/ffffff/book.png" alt="" />
                    Project
                </a>
            </div>
        </Fade>

       
    </div>
)

export default headerText
