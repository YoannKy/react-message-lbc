import React from 'react';
import axios from 'axios';
import MessageForm from './form';
import Title from './title';
import MessageList from './list';
import Filter from './filter';

export default class MessageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      fetched: false,
    }
    this.apiUrl = 'https://message-api-lbc.herokuapp.com';
    this.action = '/messages/';
  }

  /*
   * Get messages
   * @param string fitler - A filter to apply, default = ''
   * @return array messages - An array of messages
   */
  getMessages(filter = '') {
    let status = '';
    if (filter !== '') {
         status =  `?status=${filter}`;
    }
    this.setState({fetched: false});
    return axios.get(`${this.apiUrl}${this.action}${status}`)
      .then((messages) => {
          return messages;
      });
  }

  /*
   * setData after the initial render to update the view
   */
  componentDidMount() {
      this.setData();
  }

  /*
   * Set data messages of the component
   * @param string fitler - A filter to apply, default = ''
   */
  setData(filter = '') {
      this.getMessages(filter)
      .then((messages) => {
          this.setState({
            data: messages.data,
            fetched: true
          })
      })
      .catch((error) => {
          console.log(error);
      })
  }

  /*
   * add a message
   * @param string text - text of the message
   * @param string status - status of the message (0 or 1)
   */
  addMessage(text, status) {
    const message = {
        text: text,
        public: status
    };
    axios.post(`${this.apiUrl}${this.action}`, message)
       .then(() =>{
          this.setData();
       })
       .catch((error) => {
           console.log(error);
       });
  }

  /*
   * Remove a message
   * @param string id - id of the message
   */
  handleRemove(id) {
    const messages = this.state.data.filter((message) => {
        if (message._id !== id) {
          return message;
        }
    });

    axios.delete(`${this.apiUrl}${this.action}${id}`)
      .then((res) => {
        this.setState({data: messages, fetched: true});
      })
      .catch((error) => {
          console.log(error);
      })
  }

  render() {
    if (this.state.data.length > 0 && this.state.fetched === true) {
        return (
            <div className="container">
              <Title messageCount={this.state.data.length}/>
              <MessageForm addMessage={this.addMessage.bind(this)}/>
              <Filter setData={this.setData.bind(this)}/>
              <MessageList
                messages={this.state.data}
                remove={this.handleRemove.bind(this)}
              />
            </div>
        );
    } else if (this.state.data.length === 0 && this.state.fetched === true) {
        return (
            <div className="container">
              <Title messageCount={this.state.data.length}/>
              <MessageForm addMessage={this.addMessage.bind(this)}/>
              <Filter setData={this.setData.bind(this)}/>
              <span>No messages...</span>
            </div>
        );
    } else {
        return (
          <div className="container">
            <Title messageCount={this.state.data.length}/>
            <MessageForm addMessage={this.addMessage.bind(this)}/>
            <Filter setData={this.setData.bind(this)}/>
            <div>
              Loading...
            </div>
          </div>
        );
    }

  }
}
