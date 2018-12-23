import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

it('renders without crashing', () => {
  let mounterMap = shallow(<Map />);
});
