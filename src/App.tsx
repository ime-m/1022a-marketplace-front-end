import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType ={
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}


function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
useEffect(()=>{
  setNome("Emily Marques da Cruz")
  fetch("https://one022a-marketplace-q5t4.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(dados=>setProdutos(dados))

},[])

  return (
    <>
    <h1>{nome}</h1>
    <div className="produtos-container">
    {
      produtos.map(produtos =>{

        return(
          <div className="produtos=item">
          <h1>{produtos.nome}</h1>
          <p>{produtos.imagem}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
  </div>
         )
})
    }
    </div>
    </>
  }


export default App
