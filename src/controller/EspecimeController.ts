import sql from "../config/db";
import { Especime } from "../models/Especime";

export const savedEspecime = async (especime: Especime)=>{
    const savedEspecime= await sql`
        insert into especime(id,num_serie,apelido,id_especie,cod_jaula) values (
            ${especime.id},${especime.num_serie},${especime.apelido},${especime.id_especie},${especime.codigo_jaula}
        )
    `
    return savedEspecime
}
export const findAllEspecimes= async () => {
    const especimes = await sql`
      select * from especime
      where id_especie = '1'
    `
  
    return especimes
  }