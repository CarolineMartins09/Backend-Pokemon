import BaseDataBase from "./BaseDatabase";

export class PokemonDatabase extends BaseDataBase {
    protected TABLE_NAME = "Case_pokemon"

    getAllPage = async (offset: number) => {
        try {
            const result = await PokemonDatabase.connection()
                .select("*")
                .from(this.TABLE_NAME)
                .offset(offset)
                .limit(10)

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAllByType = async (type: string) => {
        try {

            const allType = await PokemonDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE_NAME} WHERE type_1= "${type}" LIMIT 10
            `)
            return allType[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAllTwoTypes = async (type1:string, type2:string,offset:number) => {
        try {
        // const pokemonTypes= await PokemonDatabase.connection.raw(`
        //     SELECT * FROM ${this.TABLE_NAME} WHERE type_1 = "${type1}" AND type_2 = "${type2}" 
        //      ${offset} LIMIT 10
        // `)
        const pokemonTypes= await PokemonDatabase.connection()
        .select("*")
        .from(this.TABLE_NAME)
        .where({type_1: type1, type_2: type2})
        .offset(offset)
        .limit(10)
        return pokemonTypes

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAll = async () => {
        try {
            const result = await PokemonDatabase.connection()
                .select("*")
                .from(this.TABLE_NAME)

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}