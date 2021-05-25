import styled from 'styled-components';
import {View, Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Product = styled(View)`
  flex-direction: row;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ProductImage = styled(Image)`
  flex: 2;
  height: 100%;
`;

export const Title = styled(Text)`
  font-size: 17px;
`;

export const Description = styled(View)`
  flex: 3;
  padding: 10px;
`;

export const RatingsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled(FontAwesome)`
  margin: 2px;
`;

export const Rating = styled(Text)``;

export const PriceContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled(Text)`
  font-weight: bold;
  font-size: 17px;
`;

export const OldPrice = styled(Text)`
  font-size: 13px;
  padding-left: 5px;
  text-decoration-line: line-through;
`;
