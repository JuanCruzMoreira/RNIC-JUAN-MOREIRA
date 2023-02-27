import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black};
  align-self: center;
  font-size: 24px;
  font-weight: 600;
`;
