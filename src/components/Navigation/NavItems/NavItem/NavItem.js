import React from 'react';
import classes from './NavItem.css';
import Auxi from '../../../../hoc/Auxi';
import { Link } from 'react-scroll'


class navItem extends React.Component {


    render() {

        return (
            <Auxi>

                <Link activeClass={classes.active} to="home" spy={true} smooth={true} duration={100} >
                    <li className={classes.NavItem}>
                        <a href="" data-scroll-nav="0">Home</a>
                    </li>
                </Link>

                <Link activeClass={classes.active} to="about" spy={true} smooth={true} duration={100}>
                    <li className={classes.NavItem}>
                        <a className="" href="" data-scroll-nav="1" >About</a>
                    </li>
                </Link>

                <Link activeClass={classes.active} to="resume" spy={true} smooth={true} duration={100}>
                    <li className={classes.NavItem}>
                        <a className="" href="" data-scroll-nav="2">Resume</a>
                    </li>
                </Link>

                <Link activeClass={classes.active} to="experience" spy={true} smooth={true} duration={100}>
                    <li className={classes.NavItem}>
                        <a className="" href="" data-scroll-nav="3">Experience</a>
                    </li>
                </Link>

                <Link activeClass={classes.active} to="contact" spy={true} smooth={true} duration={100}>
                    <li className={classes.NavItem}>
                        <a className="" href="" data-scroll-nav="4">Contact</a>
                    </li>
                </Link>

            </Auxi>
        )
    }

}

export default navItem