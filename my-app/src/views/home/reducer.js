let defaultState = {
    selectedTab: 'CARD'
};

export default (state = defaultState, action={}) => {
    switch (action.type) {
        case 'ON_SELECT_PAYMENT_MODE': {
            return {...state, selectedTab: action.payload}
        }
        case 'ON_CHANGE_NAME': {
            return {...state, name: action.payload}
        }
        case 'ON_CHANGE_NUMBER': {
            return {...state, number: action.payload}
        }
        case 'ON_CHANGE_EXPIRY': {
            return {...state, expiry: action.payload}
        }
        case 'ON_CHANGE_CVV': {
            return {...state, cvv: action.payload}
        }
        case 'ON_CHANGE_CARD_TYPE': {
            return {...state, cardType: action.payload}
        }
        case 'ON_SEARCH': {
            return {...state, searchString: action.payload}
        }
        default: return state;
    }
};
