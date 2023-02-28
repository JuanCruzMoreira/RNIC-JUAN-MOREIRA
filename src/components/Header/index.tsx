import React from 'react';
import {Container, Title} from './styles';
import {HeaderProps} from './types';

const Header = (props: HeaderProps): JSX.Element => {
  const {title} = props;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
