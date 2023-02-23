import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {TaskProps} from './types';

const Task = (props: TaskProps): JSX.Element => {
  const {title, description, toDo} = props;

  return (
    <View
      //TODO: sacar este estilo en linea
      style={[{borderColor: toDo ? '#12e068' : '#cb0707'}, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Task;
