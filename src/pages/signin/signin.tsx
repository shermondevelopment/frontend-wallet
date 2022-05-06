import React from 'react'

/* link */
import { Link } from 'react-router-dom'

/* Components */ 
import Button from '../../components/Button'

/* styled */
import { PageSignin, PageSigninForm, PageSigninTitle } from './styled'

const Signin: React.FC = () => {
  return (
    <PageSignin>
      <PageSigninForm>
        <PageSigninTitle>MyWallet</PageSigninTitle>
        <form className="form">
          <input type="email" name="email" required placeholder="E-mail" />
          <input type="password" name="password" required placeholder='Senha' />
          <Button>Entrar</Button>
        </form>
        <Link to="/signup" className="signup-link">Primeira vez? Cadastre-se!</Link>
      </PageSigninForm>
    </PageSignin>
  )
}

export default Signin