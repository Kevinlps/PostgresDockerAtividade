import { createTables } from './config/db'
import { saveEditor, findALLEditors } from './controller/EditorController'
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

    const editors = await findALLEditors()
    //editors.forEach(e => console.log(e))

    const article: Article = {
        title: 'como pesquisar bugs no StackOverlow',
        content: 'É muito simples! Basta voce ....',
        editors
    }

    await saveArticle(article)
    
    const articles = await findALLArticles()
    articles.forEach(a => console.log(a))
}
run()