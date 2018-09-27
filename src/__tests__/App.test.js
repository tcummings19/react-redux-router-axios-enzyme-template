import React from 'react';
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
const middlewares = [thunk];

import App from '../App';

const mockStore = configureStore(middlewares);
const store = mockStore();

it('renders without crashing', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
});
