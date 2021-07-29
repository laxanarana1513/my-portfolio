import React from 'react';
import classes from './AsideText.css';

const asideText = () => {
    return (
        <aside className={classes.Aside}>
            <div className={classes.Address}>
                <h4>Address and Email</h4>
                <p>
                    Laxana Rana
                    <br />
                    Plot no.28, Jay Raj Park-1,
                    <br />
                    Civil Road, Nanakwada,
                    <br />
                    Valsad-396001, Gujarat, India
                    <br />
                    <span>laxanarana@gmail.com</span>
                </p>
            </div>

            <div className={classes.Map} >
                {/* <h4>Location</h4> */}
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.9072769305226!2d72.92192931475549!3d20.59184388623669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3a02a75d211%3A0xaa0845bed55a0397!2sJayRaj%20Park!5e0!3m2!1sen!2sin!4v1626890393321!5m2!1sen!2sin" width="299" height="300" style={{border: 0, width: 'auto'}} allowFullScreen="" loading="lazy" title="Location"></iframe>
                
            </div>
        </aside>
    )
}

export default asideText