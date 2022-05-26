import postgres from 'postgres'

const sql = postgres(
  'postgres://postgres:postgres@localhost:5432/exemplopostgres'
)

/*export const createTables = async () => {
  
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

}*/

//export default sql
export const createTables = async () => {
  await sql`
    drop table if exists especie
  `
  
  await sql`
    drop table if exists especime
  `
  
  await sql`
    drop table if exists zelador
  `
  
  await sql`
    drop table if exists jaula
  `
  
  await sql`
    drop table if exists jaula_zelador
  `
  await sql`
      create table jaula(
        codigo varchar primary key,
        area integer not null
      )
  `
  await sql`
    create table especie (
      id integer primary key,
      nome_cientifico varchar not null,
      nome_popular varchar not null,
      habitat varchar not null,
      familia varchar not null,
      ordem varchar not null
  
    )
  `
  
  await sql`
      create table especime(
        id integer primary key,
        num_serie varchar not null,
        apelido varchar,
        id_especie integer not null,
        codigo_jaula varchar not null,
        constraint fk_especie
            foreign key (id_especie)
              references especie(id)
              on delete cascade,
        constraint fk_jaula
            foreign key (codigo_jaula)
              references jaula(codigo)
              on delete cascade
      )
  `
  
  await sql`
      create table zelador(
        matricula varchar primary key,
        nome varchar not null,
        data_nascimento date not null
      )
  `
  
  
  
  await sql`
        create table jaula_zelador(
          codigo_jaula varchar not null,
          matricula_zelador varchar not null,
          primary key (codigo_jaula, matricula_zelador),
          constraint fk_jaula
            foreign key (codigo_jaula)
              references jaula(codigo)
              on delete cascade,
          constraint fk_zelador
            foreign key(matricula_zelador)
              references zelador(matricula)
        
  `
  
  await sql`
    delete from especie
  `
  
  await sql`
    delete from especime
  `
  
  await sql`
    delete from zelador
  `
  
  await sql`
    delete from jaula
  `
  
  await sql`
    delete from jaula_zelador
  `
 }
  
 export default sql
 