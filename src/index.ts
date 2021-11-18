import { URLController } from './controller/URLController'
import express from 'express'
import { MongoConnection } from './db/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()
const urlcontroller = new URLController()
api.post("/shorten", urlcontroller.shorten)
api.get("/:hash", urlcontroller.redirect)

api.listen(5000, () => console.log('Express Linstening'))
