import React from 'react';
import * as S from './styles';
// import * as U from './utils';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const Index = ({item}: ProductItemProps) => {
  return (
    <S.Product>
      <S.ProductImage source={{uri: item.image}} />

      <S.Description>
        <S.Title numberOfLines={3}>{item.title}</S.Title>
        <S.RatingsContainer>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <S.Icon
              size={18}
              color={'#e47911'}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
            />
          ))}

          <S.Rating>{item.ratings}</S.Rating>
        </S.RatingsContainer>
        <S.PriceContainer>
          <S.Price>from ₱{item.price}</S.Price>
          {item.oldPrice && <S.OldPrice>${item.oldPrice}</S.OldPrice>}
        </S.PriceContainer>
      </S.Description>
    </S.Product>
  );
};

export default Index;
