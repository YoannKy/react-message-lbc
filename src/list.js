import   React  from 'react';
import MessageItem  from './item';

/*
 * MessageList component for message
 */
export default class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageNode: props.messages.map((message) => {
                return (<MessageItem message={message} key={message._id} remove={props.remove}/>)
            })
        }
    }

    /*
     * Once the component is updated, update its data
     */
    componentDidUpdate() {
        if (this.state.messageNode.length !== this.props.messages.length) {
            this.setState ({
                messageNode: this.props.messages.map((message) => {
                    return (<MessageItem message={message} key={message._id} remove={this.props.remove}/>)
                })
            });
        }
    }

    render() {
        return (
            <ul className="message-list">{this.state.messageNode}</ul>
        )
    };
}
