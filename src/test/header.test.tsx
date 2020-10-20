import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../common/header';
import { Switch } from 'antd';

configure({ adapter: new Adapter() });
describe('<Header />', () => {
  let dark = true;
  const toggleDark = () => {
    dark = dark ? false : true;
  };
  const wrapper = shallow(
    <Header toggleDark={toggleDark} dark={dark}></Header>
  );
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

  it('it renders right section', () => {
    const right = wrapper.find('.right');
    const result = right.text();
    expect(result).toBe('BlogProjectsResume');
  });

  it('renders light/dark switch button', () => {
    expect(
      wrapper.contains(
        <Switch
          className='switch'
          onClick={toggleDark}
          defaultChecked={window.localStorage.getItem('theme') === 'dark'}
          checkedChildren='🌛'
          unCheckedChildren='🌞'
        ></Switch>
      )
    ).toBe(true);
  });
});
