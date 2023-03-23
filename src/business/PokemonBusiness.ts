import { PokemonDatabase } from "../data/PokemonDatabase";
import { CustomError } from "../error/BaseError";

const pokemonDatabase = new PokemonDatabase()

export class PokemonBusiness {


    getAll = async () => {
        try {

            const result = await pokemonDatabase.getAll()

            return result

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}