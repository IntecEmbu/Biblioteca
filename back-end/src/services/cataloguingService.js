import db from '../Database/Connection.js'

async function insertBook(data){
    const conn = await db.connect()

    const {title, edition, isbn, year, category, cdd, idiom} = data

    // Depois adicionar os nomes corretos das colunas
    const sql = 'INSERT INTO tbl_book (title, edition, isbn, realease_year, category, cdd, idiom) VALUES (?, ?, ?, ?, ?, ?, ?)'

    const values = [title, edition, isbn, year, category, cdd, idiom]

    await conn.query(sql, values)

    conn.end()
}

export default {insertBook}