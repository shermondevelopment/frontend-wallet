import styled from 'styled-components'

export const PageHome = styled.main`
  padding: 25px;
`

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const PageHomeTitle = styled.h1`
  font-family: 'Raleway',sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 26px;
`

export const PageHomeMovimentions = styled.div`
  width: 326px;
  height: 446px;
  background: #fff;
  border-radius: 5px;
  margin-top: 22px;
`



export const Transactions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PageHomeNewTransaction = styled.div`
  width: 100%;
  max-width: 155px;
  height: 114px;
  background: #A328D6;
  border-radius: 5px;
  margin-top: 13px;
  padding: 9px;
  position: relative;

  & > a {
    display: block
    position: relative;
  }

  & > a > span {
    width: 64px;
    position: absolute;
    left: 9px;
    bottom: 9px;
    font-family: 'Raleway',sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 17px;
  }
`
