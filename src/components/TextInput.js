import React, { Component } from 'react';
import '../App.css';

class TextInput extends Component {

  constructor(props) {
   super(props)
   this.state = {
    zipCode: '',
    zipCodePattern: /^[0-9]{1,5}$/
   }
   //this.onHandleZipCodeChange = this.onHandleZipCodeChange.bind(this)
  }

  onKeyPressField = (e) => {
    //debugger
//     let zipCode = e.target.value
//     let isZipCode = this.state.zipCodePattern.test(zipCode)
//
//     if (!isZipCode) {
//         return false
//     }
//
//     if (zipCode === '' || this.state.zipCodePattern.test(zipCode)) {
//         this.setState({ [e.target.name]: zipCode })
//     }
    return (e.charCode >= 48 && e.charCode <= 57)
  }

  onChangeField = (e) => {
    //debugger
    this.setState({ 'zipCode': e.target.value })
    this.props.updateZipCode(e.target.value)
  }


  render() {
      return (
            <input
                type="text"
                className="text-input"
                value = { this.state.zipcode }
                size="5"
                onKeyPress = {event => this.onKeyPressField(event)}
                onChange= {event => this.onChangeField(event)}
              />
      );
  }
}

export default TextInput;
