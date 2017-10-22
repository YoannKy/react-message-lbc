import Title from '../src/title';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Title component', () => {
    configure({ adapter: new Adapter() });
    it('should return: 5 messages', () => {
        const messageCount = 5;

        const wrapper = shallow(
            <Title
                messageCount={messageCount}/>
        );

        const title = wrapper.find('h1');
        expect(title.text()).toBe('5 messages');
    });
});
