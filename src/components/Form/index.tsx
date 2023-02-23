import React, {useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AddTaskFormProps} from './types';

const AddTaskForm = (props: AddTaskFormProps): JSX.Element => {
  const {taskList, setTaskList} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const newTask = {
    title: title,
    description: description,
    toDo: true,
  };

  const handleOnPress = () => {
    setTaskList([...taskList, newTask]);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.touchable} onPress={handleOnPress}>
        <Text style={styles.touchableText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskForm;
