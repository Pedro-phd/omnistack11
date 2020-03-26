const express = require('express')
const routes = express.Router()


routes.post('/', (req,res)=>{
    const body = req.body
    console.log(body)
    return res.send('true')
})


module.exports = routes;