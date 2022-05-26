export type Especie ={
    id:number
    nome_cientifico:string
    nome_popular:string
    habitat:string
    familia:string
    ordem: string
}

export const getEspecie = (jsonObj: any): Especie => {
    const { id ,nome_cientifico,nome_popular,habitat,familia,ordem } = jsonObj
    const especie: Especie = {
        id,
        nome_cientifico,
        nome_popular,
        habitat,
        familia,
        ordem
    }
    return especie
}