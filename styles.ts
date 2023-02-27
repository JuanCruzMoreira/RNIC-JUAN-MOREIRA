import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const StatusBar = styled.StatusBar`
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const TaskList = styled.View`
  flex: 1;
  padding: 24px 0;
`;
