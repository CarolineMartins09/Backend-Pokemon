import BaseDataBase from "./BaseDatabase";

export class PokemonDatabase extends BaseDataBase {
    protected TABLE_NAME = "Case_pokemon"

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

    getAllByType = async (type: string) => {
        try {

            const allType = await PokemonDatabase.connection.raw(`
            SELECT * FROM ${this.TABLE_NAME} WHERE type_1= "${type}"
            `)
            return allType

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}