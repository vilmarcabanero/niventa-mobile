import styled from 'styled-components';
import {Pressable, Text} from 'react-native';

export const StyledPressable = styled(Pressable)`
  background-color: #e47911;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #a15e1b;
`;

export const Label = styled(Text)`
  color: white;
  font-size: 16px;
`;
