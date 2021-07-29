import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';
import NavItems from '../NavItems/NavItems';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxi>
            <Backdrop show={props.open} click={props.closed} />

            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                

                <nav style={{  backgroundColor: 'black' }}>
                    <NavItems />
                </nav>
            </div>
        </Auxi>

    )
}


export default sideDrawer