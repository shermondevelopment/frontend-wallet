import React, { useState } from 'react'

/* components */
import Button from '../../components/Button'

/*  api */
import api from '../../services/api'

/* alert */
import Alert from '../../components/Alert'

/* react-router-dom */
import { useNavigate } from 'react-router-dom'

/* style */
import * as S from './styled'

const Exit: React.FC = () => {

  const [message, setMessage] = useState({ show: false, alert: '' })
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  

  const handleExit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await api.post('/transaction/exit', {value, description}, { headers: { token: JSON.parse(localStorage.getItem('user') as string).token } })
      navigate('/home')
    } catch (error: any) {
      setMessage({
        alert: error?.response?.data?.error,
        show: true,
      })
    }
  }

  return (
    <S.PageEntry>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
       {message.alert}
      </Alert>
      <S.PageTitle>Nova saída</S.PageTitle>
      <form onSubmit={handleExit}>
        <input type="number" name="value" required placeholder="Valor"  value={value} onChange={e => setValue(e.currentTarget.value)} />
        <input type="text" name="description" required  placeholder="Descrição" value={description} onChange={e => setDescription(e.currentTarget.value)} />
        <Button>Salvar saída</Button>
      </form>
    </S.PageEntry>
  )
}

export default Exit