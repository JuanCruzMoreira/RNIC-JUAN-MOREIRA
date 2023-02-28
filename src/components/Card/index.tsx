import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import Delete from '../../assets/icons/Delete';
import Pencil from '../../assets/icons/Pencil';
import {
  Container,
  Title,
  Description,
  Button,
  ButtonsContainer,
  BackgroundImg,
  ContentWrapper,
} from './styles';
import {CardProps} from './types';

const defaultImage = require('../../assets/images/fondoCard.jpg');
const Card = (props: CardProps): JSX.Element => {
  const {title, description, toDo, imageURL} = props;

  const [imageURI, setImageURI] = useState<ImageSourcePropType>({
    uri: imageURL,
  });

  // if (!imageURL) setImageURI(require('../../assets/images/fondoCard.jpg'));

  return (
    <Container>
      <BackgroundImg
        toDo={toDo}
        alt="backgroundImage"
        source={imageURL ? imageURI : defaultImage}
        onError={() => setImageURI(defaultImage)}>
        <ContentWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonsContainer>
            <Button>
              <Pencil width={17} height={17} />
            </Button>
            <Button>
              <Delete width={17} height={17} />
            </Button>
          </ButtonsContainer>
        </ContentWrapper>
      </BackgroundImg>
    </Container>
  );
};

export default Card;
