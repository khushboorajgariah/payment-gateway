const actions = {
    onSelectPaymentMode: (mode) => {
        return {
            type: 'ON_SELECT_PAYMENT_MODE',
            payload: mode
        }
    },
    onChangeName: (name) => {
        return {
            type: 'ON_CHANGE_NAME',
            payload: name
        }
    },
    onChangeNumber: (number) => {
        return {
            type: 'ON_CHANGE_NUMBER',
            payload: number
        }
    },
    onChangeExpiry: (expiry) => {
        return {
            type: 'ON_CHANGE_EXPIRY',
            payload: expiry
        }
    },
    onChangeCvv: (cvv) => {
        return {
            type: 'ON_CHANGE_CVV',
            payload: cvv
        }
    },
    onChangeCardType: (type) => {
        return {
            type: 'ON_CHANGE_CARD_TYPE',
            payload: type
        }
    },
    onSearch: (str) => {
        return {
            type: 'ON_SEARCH',
            payload: str
        }
    }
};

export default actions;