/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, KeyboardAvoidingView, SafeAreaView, Text} from 'react-native';

import styles from './styles';
import Task from './src/components/Task';
import {TasksArray} from './src/constants';
import Header from './src/components/Header';
import AddTaskForm from './src/components/Form';

function App(): JSX.Element {
  const [taskList, setTaskList] = useState(TasksArray);
  // const [appIsActive, setAppIsActive] = useState(true);

  const emptyList = <Text>No hay tasks para mostrar</Text>;

  // useEffect(() => {
  //   AppState.addEventListener('change', nextAppState => {
  //     console.log(nextAppState);
  //     nextAppState === 'active' ? setAppIsActive(true) : setAppIsActive(true);
  //     console.log('Hola', appIsActive);
  //   });
  // });

  // useEffect(() => {
  //   setTaskList(TasksArray);
  // }, [appIsActive]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          style={styles.taskList}
          data={taskList}
          renderItem={({item, index}) => (
            <Task
              title={`${item.title} ${index + 1}`}
              description={item.description}
              toDo={item.toDo}
            />
          )}
          ListHeaderComponent={<Header title={'Tasks List'} />}
          ListEmptyComponent={emptyList}
        />
        <AddTaskForm taskList={taskList} setTaskList={setTaskList} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
