import React from 'react'
import { Link } from 'react-router-dom'

/* styles */
import * as S from './styled'

const Home: React.FC = () => {
  return (
    <S.PageHome>
      <S.PageHeader>
        <S.PageHomeTitle>Olá Fulano</S.PageHomeTitle>
        <img src="/assets/img/open.svg" alt="exit" />
      </S.PageHeader>
      <S.PageHomeMovimentions>
        a
      </S.PageHomeMovimentions>
      <S.Transactions>
      <S.PageHomeNewTransaction>
        <Link to="/new-entry">
          <img src="/assets/img/new.svg" alt="new entry" />
          <span>Nova entrada</span>
        </Link>
      </S.PageHomeNewTransaction>
      <S.PageHomeNewTransaction>
        <Link to="/new-entry">
          <img src="/assets/img/minus.svg" alt="new entry" />
          <span>Nova saída</span>
        </Link>
      </S.PageHomeNewTransaction>
      </S.Transactions>
    </S.PageHome>
  )
}

export default Home