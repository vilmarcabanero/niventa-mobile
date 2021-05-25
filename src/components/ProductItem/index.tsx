import React from 'react';
import * as S from './styles';
import * as U from './utils';

const Index = () => {
  return (
    <S.Product>
      <S.ProductImage source={{uri: U.uri1}} />

      <S.Description>
        <S.Title numberOfLines={3}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </S.Title>
        <S.RatingsContainer>
          <S.Icon size={18} color={'#e47911'} name="star" />
          <S.Icon size={18} color={'#e47911'} name="star" />
          <S.Icon size={18} color={'#e47911'} name="star" />
          <S.Icon size={18} color={'#e47911'} name="star-half-full" />
          <S.Icon size={18} color={'#e47911'} name="star-o" />
          <S.Rating>13,032 </S.Rating>
        </S.RatingsContainer>
        <S.Price>
          from $13.57 <S.OldPrice>$16.22</S.OldPrice>
        </S.Price>
      </S.Description>
    </S.Product>
  );
};

export default Index;
