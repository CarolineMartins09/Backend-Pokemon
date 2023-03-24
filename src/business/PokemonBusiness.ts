import { PokemonDatabase } from "../data/PokemonDatabase";
import { CustomError } from "../error/BaseError";

const pokemonDatabase = new PokemonDatabase()

export class PokemonBusiness {


    getAllPage = async (offset: number) => {
        try {
            if(!offset){
                offset = 1
            }

            const page = 5

            const newOffset = page * (Number(offset) - 1)

            const result = await pokemonDatabase.getAllPage(newOffset)

            return result

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    getAllByType = async (type: string) => {
        try {
            if (!type) {
                throw new CustomError(400, "Insert type");
            }
            const newType = type.toLowerCase()

            const result = await pokemonDatabase.getAllByType(newType)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    getAll = async () => {
        try {
            const result = await pokemonDatabase.getAll()
            return result

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}