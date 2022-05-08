import React, {  useEffect, useState } from 'react'

/* api */
import api from '../../services/api'

/* react-router-dom */
import { Link, useNavigate } from 'react-router-dom'

/* date fns */
import { format } from 'date-fns'

/* alert */
import Alert from '../../components/Alert'

/* styles */
import * as S from './styled'

type Transaction = {
  _id: string,
  value: number
  description: string
  is_entry: boolean
  date_movimentation: Date
}

const Home: React.FC = () => {


  const [message, setMessage] = useState({ show: false, alert: '' })
  const [balance, setBalance] = useState<number | null>(null)
  const [transaction, setTransaction] = useState<Array<Transaction> | null>(null)
  
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  const getTransactions = async () => {
    try {
      const { data } = await api.get('/transaction', { headers: {
        token: JSON.parse(localStorage.getItem('user') as string).token
      } })
      setBalance(data.balance)
      setTransaction(data.transactions)
    } catch (error: any) {
      setMessage({
        alert: error?.response?.data?.error,
        show: true,
      })
    }
  }


  useEffect(() => {
    getTransactions()
  }, [])


  return (
    <>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
       {message.alert}
      </Alert>

      <S.PageHome>
        <S.PageHeader>
          {<S.PageHomeTitle>{JSON.parse(localStorage.getItem('user') as string).name}</S.PageHomeTitle>}
          <img src="/assets/img/open.svg" alt="exit" onClick={() => logOut()}/>
        </S.PageHeader>
        <S.PageHomeMovimentions>
          {/* <span className="not-movimentatios">Não há registros de entrada ou saida</span> */}
          <S.ListContainerMoviemntation>
            <S.ListMovimentatios>
              <ul>
               {transaction && transaction.map( item => {
                 return (
                  <li key={item._id}>
                    <S.ListOptions>
                      <div className="list-info">
                        <span className="list-date">{format(new Date(item.date_movimentation), 'dd/MM')}</span>
                        <span className="list-text">{item.description}</span>
                      </div>
                      <span className={`value-movimentation ${item.is_entry ? 'entry' : 'exit'}`}>
                        {item.value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}).replace(/R\$/, '')}
                        &nbsp;<span>x</span>
                      </span>
                    </S.ListOptions>
                  </li>
                 )
               } )}
              </ul>
            </S.ListMovimentatios>
            <S.ListFooterInfo>
              <span className="balance">Saldo</span>
              <span className="money">
                {balance && 
                  <span className={`${balance < 0 ? 'negative' : 'positive' }`}>
                    {(balance ).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}).replace(/R\$/, '')}
                  </span>
                }
              </span>
            </S.ListFooterInfo>
          </S.ListContainerMoviemntation>
        </S.PageHomeMovimentions>
        <S.Transactions>
        <S.PageHomeNewTransaction>
          <Link to="/new-entry">
            <img src="/assets/img/new.svg" alt="new entry" />
            <span>Nova entrada</span>
          </Link>
        </S.PageHomeNewTransaction>
        <S.PageHomeNewTransaction>
          <Link to="/exit">
            <img src="/assets/img/minus.svg" alt="new entry" />
            <span>Nova saída</span>
          </Link>
        </S.PageHomeNewTransaction>
        </S.Transactions>
      </S.PageHome>
    </>
    
  )
}

export default Home