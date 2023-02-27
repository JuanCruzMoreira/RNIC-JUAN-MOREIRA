import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Card = styled.View<{toDo: boolean}>`
  background-color: '#ffffff';
  border-radius: 15px;
  margin-top: 22px;
  padding: 12px;
  border: 2px solid ${({toDo}) => (toDo ? '#cb0707' : '#12e068')};
`;

// export const Card = styled.view {

// }

// export const = styled. {

// }

// export const = styled. {

// }

// export const = styled. {

// }
