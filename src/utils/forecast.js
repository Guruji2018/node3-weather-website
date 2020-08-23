const request = require('request')

const forecast = (lat, long, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=b9bcec5b12398235f3fe77458fed32ba&query=' + lat + ',' + long + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to find location', undefined)
        } else if (body.error){
            callback('The weather app was not able to return any value because of an error', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike  + ' degrees out.')
        }
    })
}

module.exports = forecast