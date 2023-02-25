/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  AppState,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';
import styles from './styles';
import Task from './src/components/Task';
import {TasksArray} from './src/constants';
import Header from './src/components/Header';
import AddTaskForm from './src/components/Form';

function App(): JSX.Element {
  const [taskList, setTaskList] = useState(TasksArray);

  const emptyList = <Text>No hay tasks para mostrar</Text>;

  const isAndroid = Platform.OS === 'android' ? true : false;

  useEffect(() => {
    RNBootSplash.hide({fade: true});
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState !== 'active') {
        setTaskList([]);
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isAndroid ? 'dark-content' : 'light-content'}
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={isAndroid ? undefined : 'padding'}>
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
