import { URLController } from 'controller/URLController'
import express, { Request, Response } from 'express'

const api = express()
api.use(express.json())

const urlcontroller = new URLController
api.post("/shorten", urlcontroller.shorten)

api.listen(5000, () => console.log('Express Linstening'))
