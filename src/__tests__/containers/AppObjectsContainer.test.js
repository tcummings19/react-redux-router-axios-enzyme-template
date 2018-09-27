import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const store = mockStore();

import AppObjectsContainer from '../../containers/AppObjectsContainer'

describe('GraphContainer', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MemoryRouter>
                    <AppObjectsContainer/>
                </MemoryRouter>
            </Provider>
        );
    });
});
