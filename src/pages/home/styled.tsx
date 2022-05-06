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
  width: 100%;
  height: 446px;
  padding: 23px 12px;
  background: #fff;
  border-radius: 5px;
  display: fex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 22px;

  & > .not-movimentatios {
    display: block;
    width: 180px;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #868686;
  }
`


export const Transactions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PageHomeNewTransaction = styled.div`
  width: 100%;
  max-width: 48%;
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

export const ListContainerMoviemntation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ListMovimentatios = styled.div`
  flex: 1;
  
  & > ul {
    list-style: none;
  }
  & > ul > li {
    margin-bottom: 20px;
  }
`

export const ListOptions = styled.div`
  display: flex;

  & > .list-info > .list-date{
    color: #C6C6C6;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
  & > .list-info > .list-text, & > .value-movimentation{
    color: #000;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-left: 10px;
  }

  & > .value-movimentation {
    flex: 1;
    text-align: right;
  }

  & > .value-movimentation.exit {
    color: #C70000;
  }
  & > .value-movimentation.entry {
    color: #03AC00;
  }
`

export const ListFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 40px;

  & > .balance {
    color: #000;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
  }
  & > .money { 
    color: #03AC00;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
  }
`