import React from 'react';
import classes from './Contact.css';
import Input from './Input/Input';
import {connect} from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner'; 
import AsideText from './AsideText/AsideText';
import * as actions from '../../store/actions/indexactions';

class Contact extends React.Component {

    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                label: 'Name',
                star: true,
                validation: {
                    required: true
                }
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email'
                },
                value: '',
                label: 'Email',
                star: true,
                validation: {
                    required: true
                }
            },

            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                label: 'Subject',
                validation: {
                    required: false
                }
            },

            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                label: 'Message',
                star: true,
                validation: {
                    required: true
                }
            },

        },
        // contacted: false
        // loading: false
    }

    contactHandler = (event) => {
        event.preventDefault()

        const formData = {}
        for (let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value
        }

        const contact = {
            contactData: formData
        }

        this.props.onContact(contact)
        
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value)
        const updatedContactForm = {
            ...this.state.contactForm
        }

        const updatedContactElement = {
            ...updatedContactForm[inputIdentifier]
        }
        updatedContactElement.value = event.target.value
        updatedContactForm[inputIdentifier] = updatedContactElement

        // console.log(updatedContactElement)

        this.setState({ contactForm: updatedContactForm})
    }

    render() {

        const formElementsArray = []
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form onSubmit={this.contactHandler} action="" style={{ marginBottom: "30px" }}>
                <fieldset style={{ marginBottom: "24px" }}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            label={formElement.config.label}
                            star={formElement.config.star} />
                    ))}

                    <div>
                        <button className={classes.Button}>Submit</button>
                    </div>

                </fieldset>
            </form>
        )

        if(this.props.loading){
            form = <Spinner />
        }

        

        return (
            <section id="contact" className={classes.Contact}>
                <div className="container-md"  >

                    <div className="row"
                        style={{
                            marginBottom: "42px",
                            // flexFlow: 'row',
                            // textAlign: 'center'
                        }}>
                        <div className="col-md-4"
                            style={{
                                paddingTop: "6px",
                                // marginLeft: window.matchMedia("(min-width: 768px)") ? "10px" : "82px"
                                textAlign: window.matchMedia("(min-width: 770px)") ? "center" : null,
                                marginBottom: "30px"
                            }}>

                            <h1 style={{marginBottom: "1.5rem"}}>
                                
                                <img className={classes.Img} src="https://img.icons8.com/ios-filled/75/ffffff/new-message.png" alt="" style={{textAlign: "start", marginRight: "226px"}} /> 

                                
                                <span className={classes.HSpan}>Get In Touch</span>
                            </h1>
                            <AsideText />

                        </div>

                        <div className="col-md-8">
                            {/* <p className={classes.Lead}>Send a message to get in contact with me</p> */}
                            <div className={classes.Columns}>
                                {form}
                            </div>

                            

                        </div>
                    </div>

                    {/* <div className="row"
                        style={{
                            // flexFlow: window.matchMedia("(min-width: 900px)") ? "column" : null,
                            // alignItems: window.matchMedia("(max-width: 900px)") ? "center" : null,
                            width: window.matchMedia("(max-width: 900px)") ? "auto" : null
                        }}>
                        <div className={classes.Columns}>
                            {form}
                        </div>

                        <AsideText />
                    </div> */}

                </div>
            </section>
        )
    }
}

const mapStateToProps = state =>{
    return {
        loading: state.contact.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContact: (contactData) => dispatch(actions.contactForm(contactData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Contact)