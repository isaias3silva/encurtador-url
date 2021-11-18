import { config } from "../config/constants";
import { Request, Response } from "express";
import shortId from 'shortid'
import { URLModel } from "../db/model/URL";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            res.json(url)
            return 
        }
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        const newURL = await URLModel.create({ hash, shortURL, originURL})

        res.json(newURL)

    }
    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if (url) {
            res.redirect(url.originURL)
            return
        }
        /*const url = {
            originURL: 'https://cloud.mongodb.com/v2/61956cd0c076302576ea3ef8#clusters',
            hash: 'SXtrFLvX7',
            shortURL: 'http://localhost:5000/SXtrFLvX7',
        }*/
        res.status(400).json({ error: 'URL not found'})
    }
}