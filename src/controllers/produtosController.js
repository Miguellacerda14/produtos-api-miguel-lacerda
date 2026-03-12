let produtos = [];
let nextId = 1;

// GET /api/v1/produtos
function listar(req, res) {
  return res.status(200).json(produtos);
}

// GET /api/v1/produtos/:id
function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  return res.status(200).json(produto);
}

// POST /api/v1/produtos
function criar(req, res) {
  const { nome, descricao, preco, categoria, estoque } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório", campo: 'nome' });
  }
  if (!descricao) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório", campo: 'descricao' });
  }
  if (preco === undefined || preco === null) {
    return res.status(400).json({ erro: "O campo 'preco' é obrigatório", campo: 'preco' });
  }
  if (!categoria) {
    return res.status(400).json({ erro: "O campo 'categoria' é obrigatório", campo: 'categoria' });
  }
  if (estoque === undefined || estoque === null) {
    return res.status(400).json({ erro: "O campo 'estoque' é obrigatório", campo: 'estoque' });
  }

  const agora = new Date().toISOString();

  const novoProduto = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: true,
    criado_em: agora,
    atualizado_em: agora,
  };

  produtos.push(novoProduto);

  return res.status(201).json(novoProduto);
}

// PUT /api/v1/produtos/:id
function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body;

  const produtoAtualizado = {
    id: produtos[index].id,
    nome: nome !== undefined ? nome : produtos[index].nome,
    descricao: descricao !== undefined ? descricao : produtos[index].descricao,
    preco: preco !== undefined ? preco : produtos[index].preco,
    categoria: categoria !== undefined ? categoria : produtos[index].categoria,
    estoque: estoque !== undefined ? estoque : produtos[index].estoque,
    ativo: ativo !== undefined ? ativo : produtos[index].ativo,
    criado_em: produtos[index].criado_em,
    atualizado_em: new Date().toISOString(),
  };

  produtos[index] = produtoAtualizado;

  return res.status(200).json(produtoAtualizado);
}

// DELETE /api/v1/produtos/:id
function remover(req, res) {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  produtos.splice(index, 1);

  return res.status(204).send();
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };
