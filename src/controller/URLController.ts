import { config } from "../config/constants";
import { Request, Response } from "express";
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        res.json({ originURL, hash, shortURL })

    }
    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = {
            originURL: 'https://cloud.mongodb.com/v2/61956cd0c076302576ea3ef8#clusters',
            hash: 'SXtrFLvX7',
            shortURL: 'http://localhost:5000/SXtrFLvX7',
        }
        res.redirect(url.originURL)
    }
}