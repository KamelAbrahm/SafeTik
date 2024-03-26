import { Dimensions, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    marginTop: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  topButton: {
    paddingTop: 10,
  },
  textInput: {
    borderColor: 'gray',
    backgroundColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 20,
    borderRadius: 15,
    width: Dimensions.get('window').width - 60,
    height: 44,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 5,
    paddingLeft: 10,
  },
});

export default styles;
