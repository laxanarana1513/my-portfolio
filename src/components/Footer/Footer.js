import React from 'react';
import classes from './Footer.css';
import { Link } from 'react-scroll'

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Row}>
                <div className="col-md-12" style={{ padding: "0px 20px" }}>
                    <ul className={classes.Links}>
                        <li>
                            <a href="https://www.linkedin.com/in/laxana-rana-a6b37a193/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/windows/40/ffffff/linkedin-2.png" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/android/30/ffffff/instagram.png" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/laxanarana1513" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png" alt="" />
                            </a>
                        </li>
                    </ul>

                    <ul className={classes.Copyright}>
                        <li>&#169; Copyright 2021 My-Portfolio</li>
                        <li className={classes.SubLi}>Design by <strong style={{ color: "#514c4c" }}>Laxana Rana</strong> </li>
                    </ul>
                </div>

                <div className={classes.Top}>
                    <Link to="home" spy={true} smooth={true}>
                        <img src="https://img.icons8.com/material-rounded/55/ffffff/circled-chevron-up.png" alt="" />
                    </Link>
                </div>
            </div>
        </footer>

    )
}

export default footer