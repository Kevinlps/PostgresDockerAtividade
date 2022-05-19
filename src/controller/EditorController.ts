import { Editor, getEditor } from "../models/Editor";
import sql from "../config/db";

export const saveEditor = async (editor: Editor)=>{
    const savedEditor = await sql`
        insert into editor(nome, email) values (${editor.name}, ${editor.email})
    `
    return savedEditor
}
export const findALLEditors = async () => {
    const responseArray = await sql`
        select * from editor
    `

    const editors: Editor[] = responseArray.map(r => getEditor(r))

    return editors
}

export const updateEditor = async (editor : Editor) => {
     const { id , name , email} = editor
    
     if(id){
        const response = await sql`
            update editor 
            set nome = ${name}, email = ${email}
            where id=${id}
        `
        return response
     }
     return 'id não informado'
}

export const deleteEditor = async (id: number) => {
    if (id){
        const response = await sql`
            delete from editor where id=${id}
        `
        return response
    }
    return 'id não informado'
}