import React, { useEffect, useState } from 'react'

/* components */
import Button from '../../components/Button'

/*  api */
import api from '../../services/api'

/* react-router-dom */
import { useNavigate, useParams } from 'react-router-dom'

/* alert */
import Alert from '../../components/Alert'

/* style */
import * as S from './styled'

const UpdateEntry: React.FC = () => {

  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState({ show: false, alert: '' })

  const navigate = useNavigate()
  const params = useParams()


  const handleEntry = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await api.put(`/transaction/edit/${params.id}`, {value, description}, { headers: { token: JSON.parse(localStorage.getItem('user') as string).token } })
      navigate('/home')
    } catch (error: any) {
      setMessage({
        alert: error?.response?.data?.error,
        show: true,
      })
    }
  }

  useEffect(() => {
    api.get(`/transaction/${params.id}`, { headers: {
      token: JSON.parse(localStorage.getItem('user') as string).token
    } }).then( ({data}) => {
      setValue(data.value)
      setDescription(data.description)
    } )
  }, [])

  return (
    <S.PageEntry>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
       {message.alert}
      </Alert>
      <S.PageTitle>Editar entrada</S.PageTitle>
      <form onSubmit={handleEntry} method="post">
        <input type="number" name="value" required pattern="\d+" placeholder="Valor" value={value} onChange={e => setValue(e.currentTarget.value)} />
        <input type="text" name="description" required  placeholder="Descrição" value={description} onChange={e => setDescription(e.currentTarget.value)} />
        <Button>Atualizar entrada</Button>
      </form>
    </S.PageEntry>
  )
}

export default UpdateEntry