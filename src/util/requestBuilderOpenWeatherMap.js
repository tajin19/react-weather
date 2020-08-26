import util from './util.js'

export default class RequestBuilderOpenWeatherMap {
  constructor(useHTTPS = true, useMetric = false) {
    this.domain = 'api.openweathermap.org'
    //NOTE: would never put credentials in public repository for production apps
    this.apiKey = '3134ca6f362d84c16ddad5b66f3466bc'
    const httpMode = useHTTPS ? 'https' : 'http'
    this.baseUrl = `${httpMode}://${this.domain}/data/2.5/weather?`
    this.useMetric = useMetric
  }

  TemperatureByZipCodeUrl(zipCode, useMetric) {
    return `${this.baseUrl}zip=${zipCode}&${this._unitsParam()}&${this._apiParam()}`
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