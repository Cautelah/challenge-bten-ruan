const users = require('../models/modelUsers.js')
const bcrypt = require('bcrypt')

// router
//   .route('/users/:userId')
//   .get(UserController.getUser)
//   .put(UserController.updateUser)
//   .delete(UserController.deleteUser);

module.exports = app => {
    app.post('/users', async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.senha, 10)
        const user = {email: req.body.email, senha: hashedPassword}

        users.adiciona(user, res)
    })

    app.get('/users/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        users.buscaPorId(id, res)
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)

        users.deleta(id, res)
    })

    app.put('/users/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const hashedPassword = await bcrypt.hash(req.body.senha, 10)
        const valores = {email: req.body.email, senha: hashedPassword}

        users.altera(id, valores, res)
    })

    app.post('/users/login', (req,res) => {
        //const hashedPassword = await bcrypt.hash(req.body.senha, 10)
        //const user = {email: req.body.email, senha: hashedPassword}
        const user = req.body
        users.login(user, res)

    })

   /* app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    }) 

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
    */


}