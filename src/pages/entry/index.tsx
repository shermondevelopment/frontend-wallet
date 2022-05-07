import React from 'react'
import Button from '../../components/Button'

/* style */
import * as S from './styled'

const Entry: React.FC = () => {
  return (
    <S.PageEntry>
      <S.PageTitle>Nova entrada</S.PageTitle>
      <form>
        <input type="number" name="value" required placeholder="Valor" />
        <input type="text" name="description" required  placeholder="Descrição" />
        <Button>Salvar Entrada</Button>
      </form>
    </S.PageEntry>
  )
}

export default Entry