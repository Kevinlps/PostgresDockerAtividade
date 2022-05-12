import { createTables } from './config/db'
import { saveEditor, findALLEditors } from './controller/EditorController'
import { Editor } from './models/Editor'

const run = async () => {
    await createTables()
    const editor: Editor = {
        name: 'Kevin',
        email: 'email@email.com'
    }
    await saveEditor(editor)

    const editors = await findALLEditors()
    editors.forEach(e => console.log(e))
}
run()