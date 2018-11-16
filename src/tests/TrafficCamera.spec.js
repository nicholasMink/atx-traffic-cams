import React from 'react';
import { shallow } from 'enzyme';
import TrafficCameras from '../components/TrafficCameras';

describe('TrafficCameras', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TrafficCameras />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 <p> element while loading', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});