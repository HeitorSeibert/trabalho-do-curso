// Definição do objeto Produto
class Produto {
    constructor(nome, quantidade, validade) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.validade = validade;
    }
  }
  
  // Criação do banco de dados (array de objetos Produto)
  const estoque = [];
  
  // Função para adicionar um produto ao estoque
  function adicionarProduto(nome, quantidade, validade) {
    const produto = new Produto(nome, quantidade, validade);
    estoque.push(produto);
  }
  
  // Função para listar todos os produtos no estoque
  function listarProdutos() {
    console.log("Produtos no estoque:");
    estoque.forEach((produto) => {
      console.log(`Nome: ${produto.nome}, Quantidade: ${produto.quantidade}, Validade: ${produto.validade}`);
    });
  }
  
  // Função para verificar a validade dos produtos no estoque
  function verificarValidade() {
    const hoje = new Date();
    console.log("Produtos com validade vencida:");
    estoque.forEach((produto) => {
      if (produto.validade < hoje) {
        console.log(`Nome: ${produto.nome}, Quantidade: ${produto.quantidade}, Validade: ${produto.validade}`);
      }
    });
  }