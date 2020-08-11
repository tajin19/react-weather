import { connect } from 'react-redux'
import actions from '../redux/actions.js'
import InputPanel from './InputPanel.js'

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