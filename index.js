const { default: axios } = require('axios')
require('dotenv').config()

// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS

const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q} = process.env



const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`


console.log(url)

axios.get(url).then(res =>{
    console.log(res.data)
    return res.data
    })
    .then(res => {
        console.log(res.cnt)
        return res
    })

