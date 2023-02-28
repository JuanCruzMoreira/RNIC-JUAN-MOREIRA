import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 15px;
  height: 190px;
  margin-top: 22px;
  padding: 0 12px;
`;

export const BackgroundImg = styled.ImageBackground<{toDo: boolean}>`
  flex-shrink: 0;
  min-width: 100%;
  height: 100%;
  overflow: hidden;
  border: 2px solid
    ${({theme, toDo}) => (toDo ? theme.colors.error : theme.colors.success)};
  border-radius: 15px;
`;

export const ContentWrapper = styled.View`
  padding: 10px 12px;
  gap: 8px;
  justify-content: flex-end;
`;
//TODO: Preguntar si no hay forma de definir la fuente y colores de forma general:
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Lato-Bold';
  color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Lato-Regular';
  color: ${({theme}) => theme.colors.black};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  gap: 5px;
  align-self: flex-end;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  border-radius: 25px;
  background-color: ${({theme}) => theme.colors.gray};
  padding: 10px;
  text-align: center;
`;
