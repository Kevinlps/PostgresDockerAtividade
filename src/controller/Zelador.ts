import sql from "../config/db";
import { Zelador } from "../models/Zelador";


export const savedZelador = async (zelador: Zelador)=>{
    const savedZelador= await sql`
        insert into zelador(matricula,nome,data_nascimento) values (
            ${zelador.matricula},${zelador.nome},${zelador.data_nascimento}
        )
    `
    return savedZelador
}