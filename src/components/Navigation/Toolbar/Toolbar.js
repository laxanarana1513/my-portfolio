import React from "react";
import ParticlesBg from "particles-bg";
import classes from './Toolbar.css';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavItems from "../NavItems/NavItems";
import HeaderText from "../../HeaderText/HeaderText";
import { Link } from 'react-scroll'


const toolbar = (props) => (
    <header id="home" className={classes.Header}>
        <ParticlesBg type="circle" bg={true} />

        <div className={classes.Toolbar} >
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <nav className={classes.DesktopOnly}>

                <NavItems />
            </nav>
        </div>

        <HeaderText />

        <p style={{ margin: "0 0 30px 0" }} className="scrollbar">
            <Link className={classes.A} to="about" spy={true} smooth={true} duration={100} >

                <img src="https://img.icons8.com/glyph-neue/50/ffffff/circled-chevron-down.png" alt="" />

            </Link>

        </p>

    </header>
)

export default toolbar

