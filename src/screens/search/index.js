import { Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Feather
        name="more-horizontal"
        size={24}
        color="black"
        style={styles.topButton}
      />
      <TouchableOpacity style={styles.textInput}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search..."
        ></TextInput>
      </TouchableOpacity>
      <Feather name="sliders" size={24} color="red" style={styles.topButton} />
    </SafeAreaView>
  );
};

export default SearchScreen;
