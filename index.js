const express = require('express')
const app = express()


app.use(express.json())

const produtosRouter = require('./routes/produtos')
app.use(produtosRouter)

app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})