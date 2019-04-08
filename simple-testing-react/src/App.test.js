import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App name='app'/>);
    // console.log(component.props());
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<App name='app' />);
    // console.log(component.instance().props)
    expect(component.instance().props.name).toBe('app');
  });

  describe('it updates the counter on button click', () => {
    const component = mount(<App />);
    // console.log(component);
    const button = component.find('button');
    // console.log(button);
    // button.props().onClick();
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    
    // console.log(component.state());
    expect(component.state().counter).toEqual(5);
  });
});
