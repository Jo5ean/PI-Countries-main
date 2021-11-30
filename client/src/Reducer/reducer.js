let initialState = {
    countries : [],
    country : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL':
            return {
                ...state,
                countries : action.payload
            }
        case 'GET_BY_ID': //by id (?)
            return {
                ...state,
                country : action.payload
            }
        case 'GET_BY_NAME':
            return {
                ...state,
                countriesPage : action.payload
            }
        case 'GET_CREATEDB':
            return state;
            
        default:
            return state
    }
}

export default reducer;