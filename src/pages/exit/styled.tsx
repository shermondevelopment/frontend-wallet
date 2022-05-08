import styled from 'styled-components'

export const PageEntry = styled.main`
  padding: 25px;
  display: flex;
  flex-direction: column;

  & > form {
    margin-top: 40px;
  }

  & > form > input {
    width: 100%;
    height: 58px;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    padding: 18px 15px;
    font-size: 20px;
    color: #000;
    margin-bottom: 13px;
  }

  & > form > input::placeholder {
    color:#000;
  }
`

export const PageTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 26px;
`