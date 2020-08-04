import { connect } from 'react-redux'
import InputPanel from './InputPanel.js'
import actions from '../redux/actions.js'

const mapStateToProps = (state) => ({
  zipCode: state.home.zipCode
})

const mapDispatchToProps = dispatch => ({
  fetchCurrentWeatherByZipCode: (zipCode) => dispatch(actions.fetchCurrentWeatherByZipCode(zipCode))
})

const ConnectedInputPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPanel)

export default ConnectedInputPanel