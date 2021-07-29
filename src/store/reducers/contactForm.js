import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const intialState = {
    contact: [],
    loading: false
}

const contactFormSuccess = (state, action) => {
    const newContact = updateObject(action.contactData, {id: action.contactId})
    return updateObject(state, {
        loading: false,
        contact: state.contact.concat(newContact)
    })
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case actionTypes.CONTACT_FORM_START:
            return updateObject(state, {loading: true})

        case actionTypes.CONTACT_FORM_SUCCESS:
            return contactFormSuccess(state, action)

        case actionTypes.CONTACT_FORM_FAIL:
            return updateObject(state, {loading: false})

        default: return state
    }
}

export default reducer