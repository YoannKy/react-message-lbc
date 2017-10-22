import MessageItem from '../src/item';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('MessageItem component', () => {
    configure({ adapter: new Adapter() });
    it('should display a message item', () => {
        const message = {
              _id: 1,
              text: 'hola',
              public: true
          };

        const removeFunction = () => {};

        const wrapper = shallow(
            <MessageItem
                message={message}
                remove={removeFunction}/>
        );

        const smallNode = wrapper.find('small');
        const h5Node = wrapper.find('h5');
        const button =wrapper.find('button');

        expect(smallNode.text()).toBe('hola');
        expect(h5Node.text()).toBe('Status: Public');
        expect(button.text()).toBe('Remove');
    });
});
