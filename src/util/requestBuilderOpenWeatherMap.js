import util from './util.js'

export default class RequestBuilderOpenWeatherMap {
  constructor(baseUrl = 'api.openweathermap.org', useHTTPS = true, responseFormat = 'json', useMetric = false) {
    const httpMode = useHTTPS ? 'https' : 'http'
    //NOTE: would never put credentials in public repository for production apps
    this.apiKey = '3134ca6f362d84c16ddad5b66f3466bc'
    this.baseUrl = `${httpMode}://${baseUrl}/data/2.5/weather?`
    this.responseFormat = responseFormat
    this.useMetric = useMetric
  }

  TemperatureByZipCodeUrl(zipCode, useMetric) {
    let url = `${this.baseUrl}zip=${zipCode}&${this._unitsParam()}&${this._apiParam()}`
    return url
  }

  _unitsParam (useMetric) {
    const metric = util.isNullOrUndefined(useMetric) ? this.useMetric : useMetric
    const unit = metric ? 'metric' : 'imperial'
    return `units=${unit}`
  }

  _apiParam () {
    return `APPID=${this.apiKey}`
  }
}