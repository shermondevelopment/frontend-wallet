import React, { useState } from 'react'

/* link */
import { Link } from 'react-router-dom'

/* Components */ 
import Button from '../../components/Button'

/* styled */
import { PageSignin, PageSigninForm, PageSigninTitle } from './styled'

const Signin: React.FC = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
    alert('ola')
    e.preventDefault()
  }

  return (
    <PageSignin>
      <PageSigninForm>
        <PageSigninTitle>MyWallet</PageSigninTitle>
        <form className="form" onSubmit={handleSignin}>
          <input type="email" name="email" required placeholder="E-mail" onChange={e => setEmail(e.currentTarget.value)} />
          <input type="password" name="password" required placeholder='Senha' onChange={e => setPassword(e.currentTarget.value)} />
          <Button>Entrar</Button>
        </form>
        <Link to="/signup" className="signup-link">Primeira vez? Cadastre-se!</Link>
      </PageSigninForm>
    </PageSignin>
  )
}

export default Signin