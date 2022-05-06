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
        {/* <span className="not-movimentatios">Não há registros de entrada ou saida</span> */}
        <S.ListContainerMoviemntation>
          <S.ListMovimentatios>
            <ul>
              <li>
                <S.ListOptions>
                  <div className="list-info">
                    <span className="list-date">30/01</span>
                    <span className="list-text">Almoço mãe</span>
                  </div>
                  <span className="value-movimentation exit">39,90</span>
                </S.ListOptions>
              </li>
              <li>
                <S.ListOptions>
                  <div className="list-info">
                    <span className="list-date">20/05</span>
                    <span className="list-text">Mercado</span>
                  </div>
                  <span className="value-movimentation exit">104,90</span>
                </S.ListOptions>
              </li>
              <li>
                <S.ListOptions>
                  <div className="list-info">
                    <span className="list-date">12/10</span>
                    <span className="list-text">Farmácia</span>
                  </div>
                  <span className="value-movimentation entry">204,90</span>
                </S.ListOptions>
              </li>
            </ul>
          </S.ListMovimentatios>
          <S.ListFooterInfo>
            <span className="balance">Saldo</span>
            <span className="money">2849,96</span>
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