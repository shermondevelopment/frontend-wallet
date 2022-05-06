import styled from 'styled-components'

export const PageSignin = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PageSigninTitle = styled.h1`
  font-size: 32px;
  font-family: 'Saira Stencil One', cursive;
  color: #fff;
  margin-bottom: 24px;
`
export const PageSigninForm = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;

 & > .form {
   width: 326px;
   display: flex;
   flex-direction: column;
 }

 & > .form > input {
   width: 100%;
   max-width: 326px;
   height: 58px;
   padding: 15px 18px;
   font-size: 20px;
   border-radius: 5px;
   margin-bottom: 13px;
   font-family: 'Raleway', sans-serif;
   font-weight: 400;
   color: #000;
 }

 & > .form > input::placeholder {
  color: #000;
 }

 & > .signup-link {
   color: #fff;
   font-size: 15px;
   font-family: 'Raleway', sans-serif;
   font-weight: 700;
   text-decoration: none;
   margin-top: 36px;
 }

`
