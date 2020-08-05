import React, { Component } from 'react'

class TextInput extends Component {

  onChangeField = (e) => {
    this.props.updateZipCode(e.target.value)
  }

  render() {
      return (
            <input
                type="text"
                className="text-input"
                value = { this.props.zipCode }
                size="5"
                onChange= {event => this.onChangeField(event)}
              />
      )
  }
}

export default TextInput
