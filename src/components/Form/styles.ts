import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 0px;
  background-color: ${({theme}) => theme.colors.lightgray};
  gap: 10px;
`;

export const InputText = styled.TextInput`
  font-size: 16px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 0 15px;
  border-radius: 25px;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 10px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  font-weight: 500;
  color: ${({theme}) => theme.colors.white};
`;
