import { connect } from 'react-redux'
import TextInput from './TextInput.js'
import actions from '../redux/actions.js'

const mapStateToProps = (state) => {
  return {
    zipCode: state.zipCode
  }
}

const mapDispatchToProps = dispatch => ({
  updateZipCode: (zipCode) => dispatch(actions.updateZipCode(zipCode))
})

const ConnectedTextInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput)

export default ConnectedTextInput