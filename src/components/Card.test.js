import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card component', () => {

  it('renders Card', () => {
    const card = shallow(<Card _id={'5da237699734fdcb7bef8f51'} name={'Arnold Shortman'} image={'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'}/>);
    expect(card).toMatchSnapshot();
  });
});