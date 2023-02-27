import styled from 'styled-components/native';

export const Container = styled.View<{toDo: boolean}>`
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 22px;
  padding: 12px;
  border: 2px solid
    ${({theme, toDo}) => (toDo ? theme.colors.error : theme.colors.success)};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
`;

export const Highlight = styled.Text`
  font-weight: 700;
`;
