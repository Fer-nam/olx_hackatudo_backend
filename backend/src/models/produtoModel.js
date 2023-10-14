const connection = require('./connection');

const listarTudo = async() =>{
  const [produtos] = await connection.execute('SELECT * FROM produtos');
  return produtos;
}

const criarProduto = async (produto) =>{

  const {nome} = produto;
  const {descricao} = produto;
  const {preco} = produto;
  const {categoria_id} = produto;
  const {usuario_id} = produto;
  const {filtros} = produto;
  const {vendido} = produto;
  const {troca} = produto;

  

  const query = 'INSERT INTO produtos(nome, descricao, preco, categoria_id, usuario_id, filtros, vendido, troca) VALUES(?,?,?,?,?,?,?,?)';

  const produtoCriado = await connection.execute(query,[nome, descricao, preco,categoria_id, usuario_id, filtros,vendido,troca]);

  return {insertId: produtoCriado.insertId};
};

const deleteProduto = async (id) =>{

  const produtoRemovido = await connection.execute('DELETE FROM produtos WHERE id =?', [id]);

  return produtoRemovido;
}

const atualizarProduto = async (id, produto)=>{
  const query = 'UPDATE produtos SET nome=?, descricao=?, preco=?';

  const {nome, descricao, preco} = produto;

  const produtoAtualizado = await connection.execute(query, [nome, descricao, preco]);
  return produtoAtualizado;
}


module.exports ={
  criarProduto,
  listarTudo,
  deleteProduto,
  atualizarProduto
}