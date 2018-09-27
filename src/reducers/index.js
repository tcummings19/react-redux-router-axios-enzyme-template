
//reducers provide for the global state. Below the default state for the application is set and based on
// the associated incoming action, the corresponding state is update. State is immutable, so we have to update
// state in the appReducer

let defaultState={
    appObjectIsLoading: false,
    appObjectsAreLoading: false,
    appObjectIsInserting: false,
    appObjectIsDeleting: false,
    appObjectHasErrored: false,
    appObjectsHasErrored: false,
    appObjectInsertHasErrored: false,
    appObjectDeleteHasErrored: false,
    appObjects: [],
    appObject: {}
};


export default function appReducer(state=defaultState, action) {
    switch (action.type) {
        case 'LOAD_APP_OBJECTS':
            return Object.assign({}, state, {
                appObjects: action.results
            });

        case 'LOAD_APP_OBJECT':
            return Object.assign({}, state, {
                appObject: action.result
            });

        case 'DELETE_APP_OBJECT':

            const decreasedAppObjects = [
                ...state.appObjects.slice(0, action.index),
                ...state.appObjects.slice(action.index + 1)
            ];

            return Object.assign({}, state, {
                appObjects: decreasedAppObjects

            });
        case 'INSERT_APP_OBJECT':

            const increasedAppObjects = [
                ...state.appObjects, action.app_object
            ];

            return Object.assign({}, state, {
                appObjects: increasedAppObjects
            });
        case 'APP_OBJECTS_ARE_LOADING':
            return Object.assign({}, state, {
                appObjectsAreLoading: action.isLoading
            });

        case 'APP_OBJECT_IS_LOADING':
            return Object.assign({}, state, {
                appObjectIsLoading: action.isLoading
            });

        case 'APP_OBJECT_IS_INSERTING':
            return Object.assign({}, state, {
                appObjectIsInserting: action.isInserting
            });

        case 'APP_OBJECT_IS_DELETING':
            return Object.assign({}, state, {
                appObjectIsDeleting: action.isDeleting
            });

        case 'GET_APP_OBJECTS_HAS_ERRORED':
            return Object.assign({}, state, {
                appObjectsHasErrored: action.hasErrored
            });

        case 'GET_APP_OBJECT_HAS_ERRORED':
            return Object.assign({}, state, {
                appObjectHasErrored: action.hasErrored
            });

        case 'INSERT_APP_OBJECT_HAS_ERRORED':
            return Object.assign({}, state, {
                appObjectInsertHasErrored: action.hasErrored
            });

        case 'DELETE_APP_OBJECT_HAS_ERRORED':
            return Object.assign({}, state, {
                appObjectDeleteHasErrored: action.hasErrored
            });

        default:
            return state
    }
}

