export function ProdutoCard({nome, preco, categoria,emPromocao, children}) {
    return (
        <div style={{
            border: '1px solif #646cff',
            padding: '20px',
            borderRadius: '8px',
            width: '250px',
            backgroundColor: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'

            }}>
            <div>
                <h3 style={{margin: '0 0 10px 0'}}>{nome}</h3>
                <p style={{margin: '5px 0' }}>Categoria:{categoria}</p>
                <p style={{margin: '5px 0', fontSize: '1.2em'}}>
                <strong>R${preco.toFixed(2)}</strong>
            </p>
                 {/* Condicional JSX com Operador Ternário */}
                 {   emPromocao ? (
                <span stylr={{ color: '#4ade80', fontWeight: 'bold' }}>Em Promoção</span>
                ) : (
                <span stylr={{ color: '#a1a1aa' }}>Preço Normal</span>
                )}                                                      
            </div>

            {/*rederização da propriedade especial children (ex: Botão comprar ou Remover) */}
             <div style={{marginTop: '15px'}}>
               {children}
             </div>

        </div>
);
}