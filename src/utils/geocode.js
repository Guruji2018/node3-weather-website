const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoibm9kZWpzY291cnNlMjAyMCIsImEiOiJja2U1dWFycjkwZXR0MnpyM3NzNWw0ZzJmIn0.hk-S8MXG9rKPxQKbsPhk1g&limit=1'
    
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length ===0) {
            callback('Unable to find localtion!', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode