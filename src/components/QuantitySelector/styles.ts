import styled from 'styled-components';
import {View, Text, Pressable} from 'react-native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  width: 100px;
`;

export const Title = styled(Text)``;

export const StyledPressable = styled(Pressable)`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: #d1d1d1;
`;

export const Minus = styled(Text)`
  font-size: 18px;
`;

export const Plus = styled(Text)`
  font-size: 18px;
`;

export const Quantity = styled(Text)`
  color: #007eb9;
`;
