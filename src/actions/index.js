import axios from 'axios'

export function loadAppObjects(results) {
    //notifies that the appObjects should be loaded
    return {
        type: 'LOAD_APP_OBJECTS',
        results: results
    };
}

export function loadAppObject(result) {
    //notifies that the appObject should be updated
    return {
        type: 'LOAD_APP_OBJECT',
        result: result
    };
}

export function insertAppObject(app_object, result) {
    //notifies that the app_object should be added to state
    //result is the returned value from the backend api, e.g., the primary key from the db. Pending the design of the
    //object in state, you may need to update its id with the returned result id

    return {
        type: 'INSERT_APP_OBJECT',
        app_object: app_object,
        result: result
    };
}

export function removeAppObject(index) {
    //notifies that appObject should be removed from state.
    //index is the index in the object array.
    return {
        type: 'DELETE_APP_OBJECT',
        index: index
    };
}

export function appObjectsAreLoading(bool) {
    //notifies that the appObjects are loading boolean should be updated
    return {
        type: 'APP_OBJECTS_ARE_LOADING',
        isLoading: bool
    };
}

export function appObjectIsLoading(bool) {
    //notifies that the appObject is loading boolean should be updated
    return {
        type: 'APP_OBJECT_IS_LOADING',
        isLoading: bool
    };
}

export function appObjectIsDeleting(bool) {
    //notifies that a appObject is being deleted boolean should be updated
    return {
        type: 'APP_OBJECT_IS_DELETING',
        isDeleting: bool
    };
}

export function appObjectIsInserting(bool) {
    //notifies that a appObject is being inserted boolean should be updated
    return {
        type: 'APP_OBJECT_IS_INSERTING',
        isInserting: bool
    };
}

export function getAppObjectsHasErrored(bool) {
    //notifies that get appObject request has errored and the boolean should be updated
    return {
        type: 'GET_APP_OBJECTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function getAppObjectHasErrored(bool) {
    //notifies that get object request has errored and the boolean should be updated
    return {
        type: 'GET_APP_OBJECT_HAS_ERRORED',
        hasErrored: bool
    };
}

export function insertAppObjectHasErrored(bool) {
    //notifies that insert appObject request has errored and the boolean should be updated
    return {
        type: 'INSERT_APP_OBJECT_HAS_ERRORED',
        hasErrored: bool
    };
}

export function deleteAppObjectHasErrored(bool) {
    //notifies that delete appObject request has errored and the boolean should be update
    return {
            type: 'DELETE_APP_OBJECT_HAS_ERRORED',
            hasErrored: bool
    };
}

export function getAppObjects(){
    //function requests all appObjects from the provided api url

    const api_url = process.env['REACT_APP_API_URL'];

    return (dispatch) => {
        dispatch(getAppObjectsHasErrored(false));
        dispatch(appObjectsAreLoading(true));

        return axios.get(api_url
        ).then((response)=>{
            dispatch(loadAppObjects(response.data));
            dispatch(appObjectsAreLoading(false));
        }).catch((error) =>{
            dispatch(appObjectsAreLoading(false));
            dispatch(getAppObjectsHasErrored(true))
        })
    }
}

export function getAppObject(id){
    //function requests a single appObject from the provided url

    const api_url = process.env['REACT_APP_API_URL'] + '/' + id;

    return (dispatch) => {
        dispatch(getAppObjectHasErrored(false));
        dispatch(appObjectIsLoading(true));

        return axios.get(api_url
        ).then((response)=>{
            dispatch(loadAppObject(response.data));
            dispatch(appObjectIsLoading(false));
        }).catch((error) =>{
            dispatch(appObjectIsLoading(false));
            dispatch(getAppObjectHasErrored(true))
        })
    }
}

export function createAppObject(new_app_object){
    //function updates the backend data source with the new_app_object
    const api_url = process.env['REACT_APP_API_URL'];

    return (dispatch) => {
        dispatch(insertAppObjectHasErrored(false));
        dispatch(appObjectIsInserting(true));

        return axios.post(api_url, new_app_object
        ).then((response)=>{
            dispatch(insertAppObject(new_app_object, response.data));
            dispatch(appObjectIsInserting(false));
        }).catch((error) =>{
            dispatch(appObjectIsInserting(false));
            dispatch(insertAppObjectHasErrored(true))
        })
    }
}

export function deleteAppObject(id, index){
    //function deletes the specific appObject with the provided id and removes the appObject from state via the index

    const api_url = process.env['REACT_APP_API_URL'] + '/' + id;

    return (dispatch) => {
        dispatch(deleteAppObjectHasErrored(false));
        dispatch(appObjectIsDeleting(true));

        return axios.delete(api_url
        ).then((response)=>{
            dispatch(removeAppObject(index));
            dispatch(appObjectIsDeleting(false));
        }).catch((error) =>{

            dispatch(appObjectIsDeleting(false));
            dispatch(deleteAppObjectHasErrored(true))
        })
    }
}