const request = require('request')

const forecast = (lat, lon, callback ) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '&appid=579e26434ee7b5845210dd912c0e9ae7'

    request ( { url, json: true}, (error, { body }) => {
        if (error) {
            callback('Ade error ni', undefined)
        }
        else if (body.message) {
            callback('Salah ni masukkan ape tu', undefined)
        }
        else {
            callback(undefined, 'Suhu terkini adalah ' + body.main.temp  + ' dengan kelembapan ' + body.main.humidity)
        }
    } )
}

module.exports = forecast