import MessageForm from '../src/form';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('messageCount component', () => {
    configure({ adapter: new Adapter() });
    it('should return a form with an input text and 2 radio input', () => {
        const addMessageFunction = () => {};

        const wrapper = shallow(
            <MessageForm addMessage={addMessageFunction}/>
        );

        const radio = wrapper.find('input[type="radio"]');

        const expectedRadioValue=['0', '1'];

        expect(radio.length).toBe(2);
        radio.forEach((node) => {
            expect(expectedRadioValue.includes(node.get(0).props.value)).toBe(true);
        });
    });

    it('should trigger the addMessageFunction with hola and 1 parameters once form is sent', () => {
        const addMessageFunction = jest.fn();

        const wrapper = shallow(
            <MessageForm addMessage={addMessageFunction}/>
        );

        const input = wrapper.find('input[type="text"]');

        const expectedRadioValue=['0', '1'];

        input.simulate('change', {target: {value: 'Hola'}});

        // console.log(input.get(0 ));

        wrapper.find('form').simulate('submit', {preventDefault: ()=>{} });

        expect(addMessageFunction).toHaveBeenCalledWith('Hola', '1');




    });
});
