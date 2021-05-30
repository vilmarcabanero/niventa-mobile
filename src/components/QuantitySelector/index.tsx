import React from 'react';
import * as S from './styles';

interface QuantityProps {
  quantity: number;
  setQuantity: Function;
}

const QuantitySelector = ({quantity, setQuantity}: QuantityProps) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <S.Container>
      <S.StyledPressable onPress={onMinus}>
        <S.Minus>-</S.Minus>
      </S.StyledPressable>

      <S.Quantity>{quantity}</S.Quantity>

      <S.StyledPressable onPress={onPlus}>
        <S.Plus>+</S.Plus>
      </S.StyledPressable>
    </S.Container>
  );
};

export default QuantitySelector;
