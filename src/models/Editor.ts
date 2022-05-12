export type Editor ={
    name: string
    email: string
}

export const getEditor = (jsonObj: any): Editor => {
    const {nome,email} = jsonObj
    const editor: Editor = {
        name: nome,
        email
    }
    return editor
}