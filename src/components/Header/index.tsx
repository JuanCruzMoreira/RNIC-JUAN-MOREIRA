import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {HeaderProps} from './types';

const Header = (props: HeaderProps): JSX.Element => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
