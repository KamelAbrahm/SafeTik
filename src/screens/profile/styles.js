import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 70,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  middleIcon: {
    backgroundColor: 'gray',
    borderRadius: 75,
    padding: 15,
  },
  menuContainer: {
    height: 450,
    width: Dimensions.get('window').width - 60,
    marginTop: 60,
    alignItems: 'baseline',
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 24,
    borderBottomWidth: 3,
    borderStyle: 'dashed',
    paddingLeft: 15,
    width: Dimensions.get('window').width - 70,
    marginTop: 35,
    backgroundColor: 'lightgray',
    padding: 3,
  },
  menuIcon: {
    alignSelf: 'flex-end',
    paddingLeft: 2,
  },
});

export default styles;
