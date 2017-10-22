import React from 'react';

/*
 * Filter component for message
 */
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filter : ''
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    /*
     * On change set the new data for the filter
     */
    handleFilterChange(event) {
      this.setState({
          filter : event.target.value === 'all' ? '' : event.target.value
      }, () => {
          this.props.setData(this.state.filter);
      });
    }

    render() {
        return (
          <div className='message-filter'>
              <div className='radio'>
                <input
                    type='radio'
                    name='radio'
                    id='all'
                    defaultChecked={true}
                    value='all'
                    onChange={this.handleFilterChange}/>
                <label
                    className='radio-label'
                    htmlFor='all'>
                    All
                </label>
              </div>
            <div className='radio'>
              <input
                  type='radio'
                  name='radio'
                  id='public'
                  value='public'
                  onChange={this.handleFilterChange}/>
              <label
                  className='radio-label'
                  htmlFor='public'>
                  Public
              </label>
            </div>
            <div className='radio'>
              <input
                  type='radio'
                  name='radio'
                  id='private'
                  value='private'
                  onChange={this.handleFilterChange}/>
              <label
                className='radio-label'
                htmlFor='private'>
                Private
              </label>
            </div>
          </div>
        )
    };
}
