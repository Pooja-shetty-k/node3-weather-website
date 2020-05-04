const request= require('request')

const forecast= (latitude,longitude, callback)=>{
    const url= `http://api.weatherstack.com/current?access_key=3cf64238d5deef8fd0be27f7dd5fe077&query=${latitude},${longitude}&units=m`
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        }else{
            callback(undefined, `${body.current.weather_descriptions[0]}. It's currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees. There is ${body.current.precip}% chance of rain.`)
        }
    })
}

module.exports= forecast