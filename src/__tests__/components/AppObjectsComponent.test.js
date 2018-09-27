import React from 'react';

import { shallow } from 'enzyme'

import AppObjectsComponent from '../../components/AppObjectsComponent'

describe('SVGGraph', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(
            <AppObjectsComponent/>
        );
    });
});
