function AppReducer(state = {}, action) {
    
    switch(action.type) {
        case 'FETCH_DATA':
            const nState = Object.assign({}, ...state, action.payload.data)
            console.log(nState);
            return nState;
        default:
            return state;
    }
}

export default AppReducer;