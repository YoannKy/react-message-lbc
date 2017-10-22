import React from 'react';

/*
 * MessageItem component for message
 */
export default class MessageItem extends React.Component {
    render() {
        return (
            <li>
                <div className="message-container">
                    <h5>Status: {this.props.message.public == true ? 'Public' : 'Private'}</h5>
                    <small>{this.props.message.text}</small>
                    <button onClick={() => {this.props.remove(this.props.message._id)}}>Remove</button>
                </div>
            </li>
        );
    }
}
