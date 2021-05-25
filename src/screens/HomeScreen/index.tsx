import React from 'react';
import * as S from './styles';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const Index = () => {
  return (
    <S.Container>
      <ProductItem item={products[6]} />
      {/* <ProductItem />
      <ProductItem />
      <ProductItem /> */}
    </S.Container>
  );
};

export default Index;
