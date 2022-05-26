import sql from "../config/db";
import { Jaula } from "../models/Jaula";


export const savedJaula= async (jaula: Jaula)=>{
    const savedJaula= await sql`
        insert into jaula(codigo,area) values (
            ${jaula.codigo},${jaula.area}
            )
    `
    return savedJaula
}