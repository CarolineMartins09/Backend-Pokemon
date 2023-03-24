import express from "express";

import { PokemonController } from "../controller/PokemonController";

export const pokemonRouter = express.Router()

const pokemonController = new PokemonController()

pokemonRouter.get("/poke", pokemonController.getAll)

pokemonRouter.get("/type", pokemonController.getAllType)