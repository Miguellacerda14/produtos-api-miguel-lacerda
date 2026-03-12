const express = require('express');
const produtosRouter = require('./routes/produtos');

const app = express();
const PORT = 3000;

// Middleware para aceitar corpo JSON
app.use(express.json());

// Middleware de log simples
app.use((req, _res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Registro das rotas
app.use('/api/v1/produtos', produtosRouter);

// Middleware de erro global
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).json({ erro: err.message || 'Erro interno do servidor' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
