import React from 'react';
import * as S from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <S.StyledPressable onPress={onPress}>
      <S.Label>{text}</S.Label>
    </S.StyledPressable>
  );
};

export default Button;
