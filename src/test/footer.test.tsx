import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../common/footer';

configure({ adapter: new Adapter() });
describe('<Footer />', () => {
  const wrapper = shallow(<Footer></Footer>);
  it('renders Github', () => {
    expect(
      wrapper.contains(<a href='https://github.com/aldy97'>Github</a>)
    ).toBe(true);
  });
  it('renders LinkedIn', () => {
    expect(
      wrapper.contains(
        <a
          style={{ marginLeft: 20, marginRight: 20 }}
          href='https://www.linkedin.com/in/feng-xiong-ba3a76166/'
        >
          Linkedin
        </a>
      )
    ).toBe(true);
  });
  it('renders Email', () => {
    expect(
      wrapper.contains(<a href='mailto:fengxiong34@gmail.com'>Email</a>)
    ).toBe(true);
  });
});
