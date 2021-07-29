import React from 'react';
import classes from './Input.css';
import Auxi from '../../../hoc/Auxi';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <div>
                    <label className={classes.Label}>
                        {props.label}
                        {props.star ? <span className={classes.Star}>*</span> : null}
                    </label>
                    <input
                        className={classes.Input}
                        {...props.elementConfig}
                        size="35"
                        value={props.value}
                        onChange={props.changed} />
                </div>
            )
            break;

        case ('textarea'):
            inputElement = (
                <div>
                    <label className={classes.Label}>
                        {props.label}
                        {props.star ? <span className={classes.Star}>*</span> : null}
                    </label>
                    <textarea
                        className={classes.Input}
                        cols="30" rows="15"
                        value={props.value}
                        onChange={props.changed} />
                </div>
            )
            break;

        default:
            inputElement = (
                <div>
                    <label className={classes.Label}>
                        {props.label}
                        {props.star ? <span className={classes.Star}>*</span> : null}
                    </label>
                    <input
                        className={classes.Input}
                        {...props.elementConfig}
                        size="35"
                        value={props.value}
                        onChange={props.changed} />
                </div>
            )
    }
    return (
        <Auxi>
            {inputElement}
        </Auxi>
    )
}

export default input;