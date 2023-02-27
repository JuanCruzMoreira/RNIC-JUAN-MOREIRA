import React from 'react';
import {Container, Title, Description} from './styles';
import {CardProps} from './types';

const Card = (props: CardProps): JSX.Element => {
  const {title, description, toDo} = props;

  return (
    <Container toDo={toDo}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
