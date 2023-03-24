import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";

const pokemonBusiness = new PokemonBusiness()

export class PokemonController {

    getAll = async (req: Request, res: Response) => {
        try {
            const result = await pokemonBusiness.getAll()

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    getAllType = async (req: Request, res: Response) => {
        try {
            const type = req.body.type

            const result = await pokemonBusiness.getAllByType(type)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}