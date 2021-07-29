import * as actionTypes from './actionTypes';
import axios from '../../axios-contact';


export const contactFormStart = () => {
    return {
        type: actionTypes.CONTACT_FORM_START
    }
}

export const contactFormSuccess = (id, contactData) => {
    return {
        type: actionTypes.CONTACT_FORM_SUCCESS,
        contactId: id,
        contactData: contactData
    }
}

export const contactFormFail = (error) => {
    return {
        type: actionTypes.CONTACT_FORM_FAIL,
        error: error
    }
}

export const contactForm = (contactData) => {
    return dispatch => {
        dispatch(contactFormStart())
        axios.post('/contact.json', contactData)
            .then(response => {
                
                dispatch(contactFormSuccess(response.data.name, contactData))
                
            })
            .catch(error => {
                dispatch(contactFormFail(error))
            })
        
    }
}