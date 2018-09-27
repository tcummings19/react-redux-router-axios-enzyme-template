
import appReducer from '../../reducers/index'

describe('INITIAL_STATE', () => {
    it('is correct', () => {
        const action = {type: 'dummy_action'};

        const defaultState={
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

        expect(appReducer(undefined, action)).toEqual(defaultState)
    });
});

describe('UPDATED STATE', () => {
    it('is updated after successful get appObject request', () => {
        const action =
            {
                type: 'LOAD_APP_OBJECTS',
                results: []
            };

        const expectedState={
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

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated after successful get appObject request', () => {
        const action =
            {
                type: 'LOAD_APP_OBJECT',
                result: {}
            };

        const expectedState={
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

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated after successful delete appObject request', () => {
        const action =
            {
                type: 'DELETE_APP_OBJECT',
                index: 0
            };

        const previousState={
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

        const expectedState={
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

        expect(appReducer(previousState, action)).toEqual(expectedState)
    });
    it('is updated after failed get appObjects request', () => {
        const action =
            {
                type: 'GET_APP_OBJECTS_HAS_ERRORED',
                hasErrored: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: false,
            appObjectIsDeleting: false,
            appObjectHasErrored: false,
            appObjectsHasErrored: true,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated after failed get appObject request', () => {
        const action =
            {
                type: 'GET_APP_OBJECT_HAS_ERRORED',
                hasErrored: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: false,
            appObjectIsDeleting: false,
            appObjectHasErrored: true,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated after failed delete appObject request', () => {
        const action =
            {
                type: 'DELETE_APP_OBJECT_HAS_ERRORED',
                hasErrored: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: false,
            appObjectIsDeleting: false,
            appObjectHasErrored: false,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: true,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated after failed insert appObject request', () => {
        const action =
            {
                type: 'INSERT_APP_OBJECT_HAS_ERRORED',
                hasErrored: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: false,
            appObjectIsDeleting: false,
            appObjectHasErrored: false,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: true,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated while get theorists appObject is processing', () => {
        const action =
            {
                type: 'APP_OBJECTS_ARE_LOADING',
                isLoading: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: true,
            appObjectIsInserting: false,
            appObjectIsDeleting: false,
            appObjectHasErrored: false,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated while get theorist appObject is processing', () => {
        const action =
            {
                type: 'APP_OBJECT_IS_LOADING',
                isLoading: true,
            };

        const expectedState={
            appObjectIsLoading: true,
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

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated while delete theorist appObject is processing', () => {
        const action =
            {
                type: 'APP_OBJECT_IS_DELETING',
                isDeleting: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: false,
            appObjectIsDeleting: true,
            appObjectHasErrored: false,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
    it('is updated while insert theorist appObject is processing', () => {
        const action =
            {
                type: 'APP_OBJECT_IS_INSERTING',
                isInserting: true,
            };

        const expectedState={
            appObjectIsLoading: false,
            appObjectsAreLoading: false,
            appObjectIsInserting: true,
            appObjectIsDeleting: false,
            appObjectHasErrored: false,
            appObjectsHasErrored: false,
            appObjectInsertHasErrored: false,
            appObjectDeleteHasErrored: false,
            appObjects: [],
            appObject: {}
        };

        expect(appReducer(undefined, action)).toEqual(expectedState)
    });
});