import React from 'react';
import * as S from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';

const ProductScreen = () => {
  return (
    <S.Container>
      <S.Title>{product.title}</S.Title>
      <Picker>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <S.PriceContainer>
        <S.Price>from ₱{product.price}</S.Price>
        {product.oldPrice && <S.OldPrice>${product.oldPrice}</S.OldPrice>}
      </S.PriceContainer>

      <S.Description>{product.description}</S.Description>
    </S.Container>
  );
};

export default ProductScreen;
