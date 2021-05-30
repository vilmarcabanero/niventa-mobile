import React, {useState} from 'react';
import * as S from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import product from '../../data/product';
import ImageCarousel from '../../components/ImageCarousel';
import {Picker} from '@react-native-picker/picker';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  console.log(selectedOption);
  return (
    <S.Container>
      <S.Title>{product.title}</S.Title>

      <ImageCarousel images={product.images} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>

      <S.PriceContainer>
        <S.Price>from ₱{product.price}</S.Price>
        {product.oldPrice && <S.OldPrice>${product.oldPrice}</S.OldPrice>}
      </S.PriceContainer>

      <S.Description>{product.description}</S.Description>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
      />
      <Button
        text={'Buy now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </S.Container>
  );
};

export default ProductScreen;
