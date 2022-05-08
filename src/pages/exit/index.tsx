import React from 'react'
import Button from '../../components/Button'

/* style */
import * as S from './styled'

const Exit: React.FC = () => {
  return (
    <S.PageEntry>
      <S.PageTitle>Nova saída</S.PageTitle>
      <form>
        <input type="number" name="value" required placeholder="Valor" />
        <input type="text" name="description" required  placeholder="Descrição" />
        <Button>Salvar saída</Button>
      </form>
    </S.PageEntry>
  )
}

export default Exit