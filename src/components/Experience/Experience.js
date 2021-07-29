import React from 'react';
import classes from './Experience.css';
import classs from '../Resume/Resume.css';
import Modal from '../../UI/Modal/Modal';
import Certi from './Certi/Certi';


class experience extends React.Component {
    state = {
        showing: false
    }


    modalHandler = () => {
        this.setState({ showing: true })
        // console.log("modal opened")
    }

    modalCancelHandler = () => {
        this.setState({ showing: false })
        // console.log("modal closed")
    }


    render() {
        return (
            <section id="experience" className={classes.Experience}>
                <div className="container" style={{ marginBottom: "42px", paddingBottom: "24px" }}>

                    <div className="row">

                        <div className="col-md-3"
                            style={{
                                textAlign: window.matchMedia("(min-width: 768px)") ? "center" : null,
                                marginBottom: "24px"
                            }}>
                            <h3>
                                <span className={classes.Span}>Experience</span>
                            </h3>

                        </div>

                        <div className="col-md-9">
                            <div className={classs.Item}>
                                <h4 className={classs.SubHead}>VERZEO Internship Program with MNCs, Autodesk & Google Adwords</h4>
                                <h5 className={classs.SubLower}>2 months (July, 2021 & August, 2021)</h5>
                                <p className={classs.SubPara}><em>Domain: Web Development</em></p>
                                <p style={{ fontFamily: `sans-serif` }}>
                                    First month: Training in practical and industrial knowledge of above mentioned domain.
                                    <br />
                                    Second month: 2 projects, minor and major.
                                </p>
                                <button style={{ border: "none", backgroundColor: 'white' }}
                                    onClick={this.modalHandler}>
                                    <img src="https://img.icons8.com/glyph-neue/40/fa314a/certificate.png" alt="" />
                                </button>
                            </div>


                            <Modal show={this.state.showing} modalClosed={this.modalCancelHandler} >
                                <Certi />
                            </Modal>

                        </div>
                    </div>

                </div>
            </section>
        )
    }

}

export default experience