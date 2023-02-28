import React, {useRef, useState} from 'react';
import {Keyboard, TextInput, TouchableWithoutFeedback} from 'react-native';
import Check from '../../assets/icons/Check';
import {Container, InputText, Button} from './styles';
import {AddTaskFormProps} from './types';

const AddTaskForm = (props: AddTaskFormProps): JSX.Element => {
  const {setTaskList} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  const newTask = {
    title: title,
    description: description,
    toDo: false,
  };

  const handleOnPress = () => {
    setTaskList(taskList => [...taskList, newTask]);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <InputText
          placeholder="Title"
          onChangeText={setTitle}
          returnKeyType="next"
          onSubmitEditing={() => {
            descriptionInput.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <InputText
          placeholder="Description"
          onChangeText={setDescription}
          ref={descriptionInput}
        />
        <Button onPress={handleOnPress}>
          <Check width={20} height={20} />
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskForm;
