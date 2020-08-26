import RequestBuilderOpenWeatherMap from "../requestBuilderOpenWeatherMap"

describe('RequestBuilderOpenWeatherMap Class', () => {
  describe('TemperatureByZipCodeUrl Method with zipCode=92071', () => {

    describe('Instantiation Default', () => {
      it('should return https://api.openweathermap.org/data/2.5/weather?zip=92071&units=imperial&APPID=3134ca6f362d84c16ddad5b66f3466bc', () => {
        const rb = new RequestBuilderOpenWeatherMap()
        const expectedUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=92071&units=imperial&APPID=3134ca6f362d84c16ddad5b66f3466bc'
        expect(rb.TemperatureByZipCodeUrl(92071)).toBe(expectedUrl)
      })
    })

    describe('Instantiation with useHTTPS=false', () => {
        it('should return http://api.openweathermap.org/data/2.5/weather?zip=92071&units=imperial&APPID=3134ca6f362d84c16ddad5b66f3466bc', () => {
          const rb = new RequestBuilderOpenWeatherMap(false)
          const expectedUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=92071&units=imperial&APPID=3134ca6f362d84c16ddad5b66f3466bc'
          expect(rb.TemperatureByZipCodeUrl(92071)).toBe(expectedUrl)
        })
    })

    describe('Instantiation with useMetric=true', () => {
      it('should return https://api.openweathermap.org/data/2.5/weather?zip=92071&units=metric&APPID=3134ca6f362d84c16ddad5b66f3466bc', () => {
        const rb = new RequestBuilderOpenWeatherMap(true, true)
        const expectedUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=92071&units=metric&APPID=3134ca6f362d84c16ddad5b66f3466bc'
        expect(rb.TemperatureByZipCodeUrl(92071)).toBe(expectedUrl)
      })
    })

  })
})