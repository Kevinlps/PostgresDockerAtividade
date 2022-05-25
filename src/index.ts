import { createTables } from './config/db'
import { saveEditor, findALLEditors, updateEditor, deleteEditor } from './controller/EditorController'
import { Editor } from './models/Editor'
import { Article } from './models/Article'
import { saveArticle, findALLArticles } from './controller/ArticleContrller'

const run = async () => {
    await createTables()
    let editor: Editor = {
        name: 'Kevin',
        email: 'email@email.com'
    }
    await saveEditor(editor)

    editor = {
        name: 'teste2',
        email: 'emailteste2@email.com'
    }
    await saveEditor(editor)

    let editors = await findALLEditors()
    editors.forEach(e => console.log(e))

    const article: Article = {
        title: 'como pesquisar bugs no StackOverlow',
        content: 'É muito simples! Basta voce ....',
        editors
    
    }

    await saveArticle(article)
    
    const articles = await findALLArticles()
    articles.forEach(a => console.log(a))

    let firstEditor = editors[0]
    firstEditor.email = 'sidney.sousa@ifms.edu.br'
    await updateEditor(firstEditor)
    
    editors = await findALLEditors()
    editors.forEach(e => console.log(e))
    console.log('-----------------------------------------------------------------------')

    firstEditor= editors[0]
    await deleteEditor(firstEditor.id)
    editors = await findALLEditors()
    editors.forEach(e => console.log(e))

}
run()

/*
especie : tudo obrigatorio
especime :apelido é opicional
zelador : tudo obrigatorio

*/