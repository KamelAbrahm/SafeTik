import { Dimensions, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
  },
  displayName: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  description: { color: 'white', marginTop: 10 },
  userIcon: {
    height: 40,
    width: 40,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  overlayIcons: {
    color: 'black',
    alignSelf: 'flex-end',
    marginTop: 30,
  },
});

export default styles;
