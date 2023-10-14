const produtoModel = require('../models/produtoModel')

const criarProduto = async (request, response) =>{

    console.log(request.body);
    const produtoCriado = await produtoModel.criarProduto(request.body);

    return response.status(201).json(produtoCriado);
};

const listarTudo = async (request, response)=>{
     const produtos = await produtoModel.listarTudo();

     return response.status(200).json(produtos);
}

const produtoDeletado = async(request, response)=>{
    const {id} = request.params;
  
    await produtoModel.deleteProduto(id);
    return response.status(204).json();
  }
  
  const produtoAtualizado = async(request, response) =>{
    const {id} = request.params;

    await produtoModel.atualizarProduto(id, request.body);
    return response.status(204).json();
  };

module.exports= {
    criarProduto,
    listarTudo,
    produtoDeletado,
    produtoAtualizado
}