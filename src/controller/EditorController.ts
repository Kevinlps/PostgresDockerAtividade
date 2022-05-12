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