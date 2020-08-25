import { connect } from 'react-redux'
import actions from '../redux/actions.js'
import TextInput from './TextInput.js'

const mapStateToProps = (state) => {
  return {
    zipCode: state.home.zipCode
  }
}

const mapDispatchToProps = dispatch => ({
  updateZipCode: (zipCode) => dispatch(actions.updateZipCode(zipCode)),
  fetchCurrentWeatherByZipCode: (zipCode) => dispatch(actions.fetchCurrentWeatherByZipCode(zipCode))
})

const ConnectedTextInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput)

export default ConnectedTextInput