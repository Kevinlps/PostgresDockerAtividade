export type Jaula ={
    codigo:string
    area:number

}

export const getJaula = (jsonObj: any): Jaula => {
    const { codigo,area} = jsonObj
    const jaula: Jaula = {
        area,
        codigo
        
    }
    return jaula
}