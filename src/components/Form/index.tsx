import React, {useRef, useState} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import {AddTaskFormProps} from './types';

const AddTaskForm = (props: AddTaskFormProps): JSX.Element => {
  const {taskList, setTaskList} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  const newTask = {
    title: title,
    description: description,
    toDo: false,
  };

  const handleOnPress = () => {
    setTaskList([...taskList, newTask]);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          onChangeText={setTitle}
          returnKeyType="next"
          onSubmitEditing={() => {
            descriptionInput.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          onChangeText={setDescription}
          ref={descriptionInput}
        />
        <TouchableOpacity style={styles.touchable} onPress={handleOnPress}>
          <Text style={styles.touchableText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskForm;
