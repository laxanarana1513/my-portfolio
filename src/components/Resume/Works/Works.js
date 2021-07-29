import React from 'react';
import classes from './Works.css';
import Work1 from '../../../assests/images/W1.png';
import Work2 from '../../../assests/images/W2.png';
import Work3 from '../../../assests/images/W3.png';

const works = () => {
    return (
        <div className={classes.Works}>
            <div className={classes.Row}>
                <h1 className={classes.H1}>Check Out Some Of My Works...</h1>
                <div className={classes.Wrap}>
                    <div className={classes.Title}>
                        <img src={Work2} alt="" className={classes.Timg} />
                        <div className={classes.Text}>
                            {/* <h1>Lorem ipsum.</h1> */}
                            <h2 className={classes.Animate_Text}>Bootstrap Tour & Travels Frontend Website</h2>
                            <p className={classes.Animate_Text}>
                                <a href="https://github.com/laxanarana1513/travelwild" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="" />
                                </a>

                                <a href="https://laxanarana1513.github.io/travelwild/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/glyph-neue/30/ffffff/link.png" alt="" />
                                </a>
                            </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>


                    <div className={classes.Title}>
                        <img src={Work3} alt="" className={classes.Timg} />
                        <div className={classes.Text}>
                            {/* <h1>Lorem ipsum.</h1> */}
                            <h2 className={classes.Animate_Text}>Burger Builder - Created with React JS</h2>
                            <p className={classes.Animate_Text}>
                                <a href="https://github.com/laxanarana1513/burger_builder" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="" />
                                </a>

                                <a href="https://laxanarana1513.github.io/burger_builder/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/glyph-neue/30/ffffff/link.png" alt="" />
                                </a>
                            </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Title}>
                        <img src={Work1} alt="" className={classes.Timg} />
                        <div className={classes.Text}>
                            {/* <h1>Lorem ipsum.</h1> */}
                            <h2 className={classes.Animate_Text}>My Portfolio Website - Created with React JS</h2>
                            <p className={classes.Animate_Text}>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="" />
                                </a>

                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/glyph-neue/30/ffffff/link.png" alt="" />
                                </a>
                            </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default works
