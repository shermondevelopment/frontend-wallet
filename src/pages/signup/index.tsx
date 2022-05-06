import React from 'react'

/* link */
import { Link } from 'react-router-dom'

/* Components */ 
import Button from '../../components/Button'

/* styled */
import { PageSignin, PageSignupForm, PageSignupTitle } from './styled'

const Signup: React.FC = () => {
  return (
    <PageSignin>
      <PageSignupForm>
        <PageSignupTitle>MyWallet</PageSignupTitle>
        <form className="form">
          <input type="name" name="text" required placeholder="Nome" />
          <input type="email" name="email" required placeholder="E-mail" />
          <input type="password" name="password" required placeholder='Senha' />
          <input type="password" name="password" required placeholder='Confirme a senha' />
          <Button>Cadastrar</Button>
        </form>
        <Link to="/signup" className="signup-link">Já tem uma conta? Entre Agora!</Link>
      </PageSignupForm>
    </PageSignin>
  )
}

export default Signup