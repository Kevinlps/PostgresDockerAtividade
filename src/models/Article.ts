import { Editor } from "./Editor";

export type Article = {
    title:string
    content:string
    editors: Editor[]
}