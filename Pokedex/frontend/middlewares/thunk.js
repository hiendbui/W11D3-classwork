const thunk = store => next => action => {
    if (typeof action === 'function') {
        return action(store.getState, store.dispatch);
    } else {
        return next(action);
    }
}

export default thunk;