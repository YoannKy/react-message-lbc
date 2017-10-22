import React from 'react';

/*
 * Form component for message
 */
export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state = {
            text: '',
            status : 1,
        };
    }
    /*
     * On submit call the addMessage method
     */
    onSubmit(event) {
        event.preventDefault();
        this.props.addMessage(this.state.text, this.state.status.toString());
    }

    /*
     * Handle changes on text input
     */
    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    /*
     * Handle changes on status input
     */
    handleStatusChange(event) {
        this.setState({status: event.target.value});
    }

    // Return JSX
    render() {
        return (
              <form
                  className='message-form'
                  onSubmit={this.onSubmit}>
                  <input
                      required
                      type='text'
                      placeholder='text'
                      onChange={this.handleTextChange}
                  />
                <div className='radio-container'>
                    <div className='radio'>
                      <input
                          type='radio'
                          id='message-status-form-public'
                          value='1'
                          name='radio'
                          defaultChecked={true}
                          onChange={this.handleStatusChange}/>
                      <label
                          className='radio-label'
                          htmlFor='message-status-form-public'>
                          Public
                      </label>
                    </div>
                    <div className='radio'>
                      <input
                          type='radio'
                          id='message-status-form-private'
                          value='0'
                          name='radio'
                          onChange={this.handleStatusChange}/>
                      <label
                        className='radio-label'
                        htmlFor='message-status-form-private'>
                        Private
                      </label>
                    </div>
                  </div>
                  <button type='submit'>SEND</button>
              </form>
        );
    };
};
