export type Zelador ={
    matricula :string
    nome:string
    data_nascimento:Date
}    

export const getZelador= (jsonObj: any): Zelador => {
    const { matricula,nome,data_nascimento} = jsonObj
    const zelador: Zelador = {
        matricula,
        nome,
        data_nascimento 
    }
    return zelador
}