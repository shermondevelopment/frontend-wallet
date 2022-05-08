import React, { useState } from 'react'

/* link */
import { Link, useNavigate } from 'react-router-dom'

/* axios */
import api from '../../services/api'

/* alert */
import Alert from '../../components/Alert'

/* Components */ 
import Button from '../../components/Button'

/* styled */
import { PageSignin, PageSigninForm, PageSigninTitle } from './styled'

const Signin: React.FC = () => {

  /* navigation */
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ show: false, alert: '' })


  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const userLogged = await api.post('/signin', { email, password })
      localStorage.setItem('user', JSON.stringify(userLogged.data))
      navigate('/home')
    } catch (error: any) {
      setMessage({
        alert: error?.response?.data?.error,
        show: true,
      })
      setEmail('')
      setPassword('')
    }
  }

  return (
    <PageSignin>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
       {message.alert}
      </Alert>
      <PageSigninForm>
        <PageSigninTitle>MyWallet</PageSigninTitle>
        <form className="form" method="post" onSubmit={handleSignin}>
          <input type="email" name="email" required placeholder="E-mail" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <input type="password" name="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.currentTarget.value)} />
          <Button>Entrar</Button>
        </form>
        <Link to="/signup" className="signup-link">Primeira vez? Cadastre-se!</Link>
      </PageSigninForm>
    </PageSignin>
  )
}

export default Signin