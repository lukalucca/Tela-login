import { useState } from 'react'
import logo from '../img/logo.png'
import './Login.css'

export function Login() {
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")

    function handleLogin(){
        return alert(`Seu email é: ${email}\nSua senha é: ${senha}`)
    }

    function mostrarSenha(){
        let senhaInput = document.getElementById("Senha")
        if (senhaInput.type === "password"){
            senhaInput.type = 'text'
        }else{
            senhaInput.type = 'password'
        }
    }
    return(

        <main>
            <section className='login'>
                <div className="content">
                    <div className="logo">
                        <img className='imgLogo' src={logo} alt="logo" />
                        <span>Vertigo</span>
                    </div>

                    <h1>Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    <form>
                        <div className="inputEmail">
                            <label for="Email">E-mail</label>
                            <input type="email" placeholder='Digite seu email' id="email" name='email' required
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="inputSenha">
                            <label for="Senha">Senha</label>
                            <input  type="password" placeholder='Digite sua senha' id="Senha" className='input__box'
                            onChange={(e) => setSenha(e.target.value)}
                            onClick={mostrarSenha}/>
                        </div>

                        <button className='buttonEntrar' onClick={handleLogin}>
                            Entrar
                        </button>
                    </form>

                    <p>Ainda não tem uma conta?<span className='destaque'> Inscreva-se</span></p>
                </div>

            </section>

            <section className='capa'>
                <div className='imagem'>'</div>
            </section>

        </main>
        
    )
}

