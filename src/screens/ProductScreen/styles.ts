import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  padding: 10px;
`;

export const Title = styled(Text)``;

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

export const Description = styled(Text)``;
