import {useState} from 'react'; // 1.Importando o useState do React
import { ProdutoCard} from './components/ProdutoCard.jsx';
import {produtos as produtosIniciais} from './data/produtos.js';
import './App.css'

function App() {
  // 2. trasformando a lista de produtos estática num "Estado" que pode mudar
  const [listaProdutos, setListaProdutos] = useState(produtosIniciais);

  //3. Criação dos estados para guardar temporariamente o que o usuário digitar no formulário.
  const [nome, setNome] = useState(' ');
  const [preco, setPreco] = useState(' ');
  const [emPromocao, setEmPromocao] = useState(false);

  //4. Função que é disparada quando clicamos no botão "Cadastrar".
  const adicionarProduto = (evento) => {
    evento.preventDefault(); //Impede que o navegador recarre a página

    //Monta o novo objeto do fone com os dados que estavam nos inputs.
    const novoProduto = {
      id: listaProdutos.length + 1, // Gera um ID sequencial
      nome: nome,
      preco: parseFloat(preco), // Garante que o preço seja sempre  um número decimal
      categoria: "Fones In-Ear",
      emPromocao: emPromocao

      };

      //Atualiza a lista na tela: pega tudo que já existia (...listaProdutos) e adiciona o novo
      setListaProdutos([...listaProdutos, novoProduto]);

      // Limpa os campos do formulário para o próximo cadastro
      setNome(" ");
      setPreco(" ");
      setEmPromocao(false);
  };


  // Cálculo do reduce agora olha para a "listaProdutos" (que é o estado)
  const precoTotal = listaProdutos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>Catálogo de equipamentos de Áudio</h1>

      {/* Resposta do requsito 1: Evolução do Front-End*/}
     <p style={{ fontStyle: 'italic', color: '#888', maxWidth: '600px', margin: '0 auto 30px auto', textAlign: 'center', marginBottom: '20px',  }}>
        <strong>Reflexão - Evolução do Front-End:</strong> Manipular dados no console com JavaScript puro serve para testar a lógica oculta. Com o React, conseguimos pegar essa mesma lógica e transformá-la  em numa interface visual interativa para o utilizador, atualizando o ecrã de forma dinâmica (como no formulário abaixo) sem necessidade de recarregar a página.
      </p>

      <h2 style={{color: '#646cff'}}>
        Valor Total do Catálogo: R$ {precoTotal.toFixed(2)}
      </h2>

      {/* --- INÍCIO DO FORMULÁRIO --- */}
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '8px',
        marginBotton: '30px',
        border: '1px solid #4ade80'
      }}>
        <h3>Adicionar Novo Equipamento</h3>

        {/* Quando o formulário é eviado, ele chama a função adicionarProduto */}
        <form onSubmit={adicionarProduto} style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '10px' }}>
          
  <input 
    type="text" 
    placeholder="Nome (ex: KZ PR3)" 
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    required
    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #555', minWidth: '220px', backgroundColor: '#2a2a2a', color: 'white' }}
  />
  
  <input 
    type="number" 
    placeholder="Preço (R$)" 
    value={preco}
    onChange={(e) => setPreco(e.target.value)}
    required
    min="0"
    step="0.01"
    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #555', minWidth: '120px', backgroundColor: '#2a2a2a', color: 'white' }}
  />
  
  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
    <input 
      type="checkbox" 
      checked={emPromocao}
      onChange={(e) => setEmPromocao(e.target.checked)}
      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
    />
    Em Promoção?
  </label>
  
  <button type="submit" style={{ padding: '10px 25px', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
    Cadastrar
  </button>
</form>
      </div>
      {/* ---FIM DO FORMULÁRIO ---}

      {/* Renderização dos cards */}

      <div style={{display:'flex', flexWrap: 'wrap', gap: '20px'}}>
        {listaProdutos.map(produto =>(
          <ProdutoCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          categoria={produto.categoria}
          emPromocao={produto.emPromocao}
        />
      ))}
    </div> 
   </div>
  );
}

export default App;
