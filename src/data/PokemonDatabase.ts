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
}