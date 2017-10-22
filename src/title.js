import React from 'react';

/*
 * Title component for message
 */
export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          messageCount : props.messageCount,
        }
    }

    componentDidUpdate() {
        if (this.state.messageCount !== this.props.messageCount) {
            this.setState ({
                messageCount: this.props.messageCount
            });
          }
    }

    render() {
        if(this.state.messageCount === 1) {
          return (
              <h1 className="message-title" >{this.state.messageCount} message</h1>
          )
        } else {
          return (
              <h1 className="message-title" >{this.state.messageCount} messages</h1>
          )
        }
    };
}
