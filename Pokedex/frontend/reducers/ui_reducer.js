const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};
    switch (action.type) {
        default:
            return state;
    }

}

export default uiReducer;