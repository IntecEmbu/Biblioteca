// Concecta com o banco

import mysql from 'mysql2/promise'

async function connect(){

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'bancoBiblioteca' // Nome da base de dados
  })

  return connection
}

export default {connect}