import sql from "../config/db";
import { Especie } from "../models/Especie";

export const savedEspecie = async (especie: Especie)=>{
    const savedEspecie= await sql`
        insert into especie (id,nome_cientifico,nome_popular,habitat,familia ,ordem) values (
            ${especie.id},${especie.nome_cientifico},${especie.nome_popular},${especie.habitat},${especie.familia},${especie.ordem}
        )
    `
    return savedEspecie
}

