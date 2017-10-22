import MessageList from '../src/list';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('MessageList component', () => {
    configure({ adapter: new Adapter() });
    it('should display a MessageItem node', () => {
        const messages = [
          {
              _id: 1,
              text: 'hola',
              public: true
          }
        ];

        const removeFunction = () => {};

        const wrapper = shallow(
            <MessageList
                messages={messages}
                remove={removeFunction}/>
        );

        const messageItem = wrapper.find('MessageItem');
        expect(messageItem.length).toBe(1);
    });
});
