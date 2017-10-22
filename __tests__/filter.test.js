import Filter from '../src/filter';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Filter component', () => {
    configure({ adapter: new Adapter() });
    it('should return 3 radio input', () => {
        const setDataFunction = () => {};

        const wrapper = shallow(
            <Filter setData={setDataFunction}/>
        );

        const radio = wrapper.find('input[type="radio"]');

        const expectedRadioValue=['all', 'public', 'private'];

        expect(radio.length).toBe(3);
        radio.forEach((node) => {
            expect(expectedRadioValue.includes(node.get(0).props.value)).toBe(true);
        });
    });
});
