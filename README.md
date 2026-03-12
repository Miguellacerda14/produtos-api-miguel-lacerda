# Produtos API

**Nome:** Miguel Lacerda  
**Matrícula:** 202501025498  
**Disciplina:** Desenvolvimento Web / Programação Back-End

API RESTful CRUD para o recurso **produtos**, desenvolvida com Node.js + Express, seguindo o padrão arquitetural MVC com armazenamento em memória.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# Instalar dependências
npm install
```

### Execução

```bash
# Produção
npm start

# Desenvolvimento (com hot-reload)
npm run dev
```

A API estará disponível em: `http://localhost:3000`

---

## 📋 Endpoints

| Método | Rota | Descrição | Status de Sucesso |
|--------|------|-----------|-------------------|
| GET | `/api/v1/produtos` | Lista todos os produtos | 200 |
| GET | `/api/v1/produtos/:id` | Busca um produto pelo ID | 200 |
| POST | `/api/v1/produtos` | Cria um novo produto | 201 |
| PUT | `/api/v1/produtos/:id` | Atualiza um produto completo | 200 |
| DELETE | `/api/v1/produtos/:id` | Remove um produto | 204 |

---

## 🧪 Exemplos de Uso

### Listar todos os produtos
```bash
curl -s http://localhost:3000/api/v1/produtos
```

### Criar produto
```bash
curl -s -X POST http://localhost:3000/api/v1/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Painel Solar 400W","descricao":"Painel fotovoltaico monocristalino","preco":899.90,"categoria":"equipamento","estoque":42}'
```

### Buscar por ID
```bash
curl -s http://localhost:3000/api/v1/produtos/1
```

### Atualizar produto
```bash
curl -s -X PUT http://localhost:3000/api/v1/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"Painel Solar 550W","descricao":"Versão atualizada","preco":1199.90,"categoria":"equipamento","estoque":30,"ativo":true}'
```

### Deletar produto
```bash
curl -s -X DELETE http://localhost:3000/api/v1/produtos/1
```

---

## 📦 Estrutura do Projeto

```
produtos-api/
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── produtos.js
│   └── controllers/
│       └── produtosController.js
├── .gitignore
├── package.json
└── README.md
```

---

## 📐 Estrutura do Produto

```json
{
  "id": 1,
  "nome": "Painel Solar 400W",
  "descricao": "Painel fotovoltaico monocristalino de alta eficiência",
  "preco": 899.90,
  "categoria": "equipamento",
  "estoque": 42,
  "ativo": true,
  "criado_em": "2026-03-09T10:00:00.000Z",
  "atualizado_em": "2026-03-09T10:00:00.000Z"
}
```
