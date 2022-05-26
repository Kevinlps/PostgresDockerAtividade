export type Especime ={
    id:number
    num_serie:string
    apelido?:string 
    id_especie:string
    codigo_jaula:string 

}

export const getEspecime = (jsonObj: any): Especime => {
    const { id , num_serie , apelido , id_especie , codigo_jaula} = jsonObj
    const especime: Especime = {
        id,
        num_serie,
        apelido,
        id_especie,
        codigo_jaula
        
    }
    return especime
}