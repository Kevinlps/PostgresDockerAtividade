import postgres from 'postgres'

const sql = postgres(
  'postgres://postgres:postgres@localhost:5432/exemplopostgres'
)

export const createTables = async () => {
  
  await sql`
    drop table if exists editor_artigo
  `
  await sql`
    drop table if exists editor
  `
  await sql`
  drop table if exists artigo
`
  await sql`
    create table editor(
      id serial primary key,
      nome varchar not null,
      email varchar not null
    )
  `

  await sql`
    create table artigo(
      id serial primary key,
      titulo varchar not null,
      conteudo text not null
    )
  `
  await sql`
    create table editor_artigo(
      id_editor integer not null,
      id_artigo integer not null,
      primary key (id_editor, id_artigo),
      constraint fk_editor foreign key (id_editor) references editor(id) on delete cascade,
      constraint fk_artigo foreign key (id_artigo) references artigo(id) on delete cascade

    )
  `

}

export default sql
