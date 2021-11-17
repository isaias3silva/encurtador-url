import { config } from "config/constants";
import { Request, Response } from "express";
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        res.json({ originURL, hash, shortURL })

    }
}