/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {AppState, FlatList, Platform, Text} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';
import {SafeArea, StatusBar, Container, TaskList} from './styles';
import Card from './src/components/Card';
import {TasksArray} from './src/constants';
import Header from './src/components/Header';
import AddTaskForm from './src/components/Form';
import {myTheme} from './src/constants/theme';
import {ThemeProvider} from 'styled-components/native';

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
    <ThemeProvider theme={myTheme}>
      <SafeArea>
        <StatusBar barStyle={isAndroid ? 'dark-content' : 'light-content'} />
        <Container behavior={isAndroid ? undefined : 'padding'}>
          <TaskList>
            <FlatList
              data={taskList}
              renderItem={({item, index}) => (
                <Card
                  title={`${item.title} ${index + 1}`}
                  description={item.description}
                  toDo={item.toDo}
                  imageURL={item.imageURL}
                />
              )}
              ListHeaderComponent={<Header title={'Tasks List'} />}
              ListEmptyComponent={emptyList}
            />
          </TaskList>
          <AddTaskForm setTaskList={setTaskList} />
        </Container>
      </SafeArea>
    </ThemeProvider>
  );
}

export default App;
