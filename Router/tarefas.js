
const express = require('express')
const router = express.Router()

const listaProdutos = [
    {
        id: 1,
        nome: "Carne",
        preco: 29.99
    },
    {
        id: 2,
        nome: "leite",
        preco: 7.99
    },
    {
        id: 3,
        nome: "batata",
        preco: 1999.99
    }
]


router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})


router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    res.json(produto)
})


router.post('/produtos', (req, res) => {
    const dadosProduto = req.body

    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: dadosProduto.nome,
        preco: dadosProduto.preco
    }

    listaProdutos.push(novoProduto)

    res.json(
        {
            mensagem: "Produto criado com sucesso!"
        }
    )
})


router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAtualizado

    res.json({
        mensagem: "Produto alterado com sucesso!"
    })
})

router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({mensagem: "Produto excluido com sucesso!"})
})







module.exports = router
