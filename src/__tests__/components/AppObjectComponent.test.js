import React from 'react';

import { shallow } from 'enzyme'

import AppObjectComponent from '../../components/AppObjectComponent'

describe('SVGGraph', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(
            <AppObjectComponent/>
        );
    });
});
