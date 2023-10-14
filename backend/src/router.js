const express = require('express');

const router = express.Router();

const produtoControler = require('./controllers/produtoController');



router.get('/produto', produtoControler.listarTudo);
router.post('/produto', produtoControler.criarProduto);
router.delete('/produto/:id', produtoControler.produtoDeletado);
router.put('/produto/:id', produtoControler.produtoAtualizado);



module.exports = router;