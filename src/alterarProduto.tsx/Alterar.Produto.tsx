import { useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
function AlterarProduto(){
    const { id } = useParams()
        const navigate = useNavigate()
        const [nome,setNome] = useState("")
        const [descricao,setDescricao] = useState("")
        const [preco,setPreco] = useState("")
        const [imagem,setImagem] = useState("")
        async function handleForm(event:FormEvent){
            event.preventDefault()
            try{
                const resposta = await fetch("http://localhost:8000/produtos",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        id:id,
                        nome:nome,
                        descricao:descricao,
                        preco:preco,
                        imagem:imagem
                    })
                })
                if(resposta.status!=500){
                    alert("Produto Cadastro com Sucesso")
                    navigate("/")
                }
                else{
                    const mensagem = await resposta.text()
                    alert("Erro ao Cadastrar Produto - Error: "+mensagem)
                }
            }
            catch(e){
                alert("Servidor não está respondendo.")
            }
            
        }
        function handleNome(event:ChangeEvent<HTMLInputElement>){
            setNome(event.target.value)
        }
        function handleDescricao(event:ChangeEvent<HTMLInputElement>){
            setDescricao(event.target.value)
        }
        function handlePreco(event:ChangeEvent<HTMLInputElement>){
            setPreco(event.target.value)
        }
        function handleImagem(event:ChangeEvent<HTMLInputElement>){
            setImagem(event.target.value)
        }
    return(
        <>
            <h1>Alterar</h1>
            <form onSubmit={handleForm}>
                <div>
                    <input placeholder="Id" type="text" name="id" id="id" value={id} readOnly/>
                </div>
                <div>
                    <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                </div>
                <div>
                    <input placeholder="Descrição" type="text" name="descricao" id="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <input placeholder="Preço" type="text" name="preco" id="preco" onChange={handlePreco} />
                </div>
                <div>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default AlterarProduto;