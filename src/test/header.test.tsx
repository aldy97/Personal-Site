import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../common/header';

configure({ adapter: new Adapter() });
describe('<Header />', () => {
  let dark = true;
  const toggleDark = () => {
    dark = dark ? false : true;
  };
  const wrapper = shallow(<Header toogleDark={toggleDark} dark={dark} />);
  it('renders my name', () => {
    const name = wrapper.find('strong');
    const result = name.text();
    expect(result).toBe('Feng (Aldy) Xiong');
  });

  it('renders my resume', () => {
    const resume = wrapper.find('a');
    const result = resume.text();
    expect(result).toBe('Resume');
  });
});
