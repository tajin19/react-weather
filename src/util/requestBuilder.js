import util from './util.js'

export default class RequestBuilder {
  constructor(baseUrl = 'api.meteomatics.com', useHTTPS = false, responseFormat = 'json', useMetric = false) {
    //this.baseUrl = useHTTPS ? 'https' : 'http'
    //NOTE: would never put credentials in public repository for production apps
    const userName = 'snapbaseinc_metcalf'
    const password = 'l1gG4KTX5sjDv'
    this.baseUrl = `${this.baseUrl}://${userName}:${password}@${baseUrl}`
    this.responseFormat = responseFormat
    this.useMetric = useMetric
  }

  BuildRequestForTemperatureForZipCode(zipCode, useMetric) {
    const parameters = `t_0m:${this._getUnit(useMetric)}`
    let url = `${this.baseUrl}/${this._buildDateSegment()}/${parameters}/${this._buildLocationSegment(zipCode)}/${this.responseFormat}`
    return url
  }

  BuildRequestForApparentTemperatureForZipCode(zipCode, useMetric) {
    const parameters = `t_0m:${this._getUnit(useMetric)}`
    let url = `${this.baseUrl}/${this._buildDateSegment()}/${parameters}/${this._buildLocationSegment(zipCode)}/${this.responseFormat}`
    return url
  }

  _buildDateSegment() {
    const now = new Date()
    return now.toISOString()
  }

  _buildLocationSegment(zipCode) {
    return `postal_US${zipCode}`
  }

  _getUnit(useMetric) {
    const metric =  util.isNullOrUndefined(useMetric) ? this.useMetric : useMetric
    return metric ? 'C' : 'F'
  }
}