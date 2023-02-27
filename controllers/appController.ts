import { Request, Response } from "express";
import { data } from "../models/data";

export const controller = {
    getPeople: (req: Request, res: Response) => {
        res.send(data)
    }
}
