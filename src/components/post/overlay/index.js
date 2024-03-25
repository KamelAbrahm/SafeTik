import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostSingleOverlay = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="user" size={38} style={styles.userIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="heart" size={40} style={styles.overlayIcons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="flag" size={40} style={styles.overlayIcons} />
      </TouchableOpacity>
      <Text style={styles.displayName}>Lorem Ipsum</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet</Text>
    </View>
  );
};

export default PostSingleOverlay;
