
import axios from 'axios'
import thunk from 'redux-thunk'
import MockAxiosAdapter from 'axios-mock-adapter'
import configureStore from 'redux-mock-store';

import * as testActions from '../../actions/index'

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Testing Axios', ()=>{
    let mock;

    //set expected response data
    const response_data = [{}];

    beforeEach(() => {

        store.clearActions();

        mock = new MockAxiosAdapter(axios);

        const api_url = process.env['REACT_APP_API_URL'];

        mock
           .onGet(api_url)
           .reply(200, response_data);
    });

    describe('getAppObjects', () => {
        it('Dispatches load appObjects action follow a successful get request', ()=>{
            const expectedActions = [
                {
                    type: 'GET_APP_OBJECTS_HAS_ERRORED',
                    hasErrored: false
                },
                {
                    type: 'APP_OBJECTS_ARE_LOADING',
                    isLoading: true
                },
                {
                    type: 'LOAD_APP_OBJECTS',
                    results: response_data
                },
                {
                    type: 'APP_OBJECTS_ARE_LOADING',
                    isLoading: false
                },

            ];
            return store.dispatch(testActions.getAppObjects()).then(() =>{
                expect(store.getActions()).toEqual(expectedActions);
            })
        })
    });

    afterEach(() => {
        mock.restore();
    })
});