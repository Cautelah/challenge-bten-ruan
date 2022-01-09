class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarUsers()
    }

    criarUsers() {
        const sql = 'CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, email varchar(50) NOT NULL, senha char(60), PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela users criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas