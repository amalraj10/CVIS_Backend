
require('dotenv').config()


const express = require('express')

const cors = require('cors')

const router = require('./Routes/router')

require('./DB/connections')



const nqServer = express()


nqServer.use(cors())



nqServer.use(express.json())

nqServer.use(router)


nqServer.use('/uploads',express.static('./uploads'))

const PORT = 4000 || process.env

nqServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

nqServer.get('/',(req,res)=>
res.send(`<h1>NestQuest Server Running successfully and ready to accept from clients</h1>`))