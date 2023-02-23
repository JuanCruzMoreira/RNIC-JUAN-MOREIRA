import {Platform, StyleSheet} from 'react-native';

const isAndroid = Platform.OS === 'android' ? true : false;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isAndroid ? '#d3fffe' : '#003344',
  },

  statusBar: {
    backgroundColor: isAndroid ? '#d3fffe' : '#003344',
  },

  taskList: {
    paddingHorizontal: 24,
  },

  headerText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default styles;
