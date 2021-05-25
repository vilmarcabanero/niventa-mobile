import React from 'react';
import * as S from './styles';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <S.Container>
      <S.SFlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default HomeScreen;
