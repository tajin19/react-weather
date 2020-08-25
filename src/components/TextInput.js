import React, { Component } from 'react'

class TextInput extends Component {

  onChangeField = (e) => {
    this.props.updateZipCode(e.target.value)
  }

  onKeyDown = (e) => {
    if(e.keyCode === 13) {
        this.props.fetchCurrentWeatherByZipCode(this.props.zipCode)
    }
  }

  render() {
      return (
            <input
                type="text"
                className="text-input"
                value = { this.props.zipCode }
                size="5"
                onChange= {event => this.onChangeField(event)}
                onKeyDown= {event => this.onKeyDown(event)}
              />
      )
  }
}

export default TextInput
