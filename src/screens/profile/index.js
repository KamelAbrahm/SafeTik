import { Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const userEmail = useSelector((state) => state.auth.currentUser?.email);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{userEmail}</Text>
      <Feather name="user" size={100} color="black" style={styles.middleIcon} />
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            filter mode <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            modify age group{' '}
            <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            adjust screen time{' '}
            <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            Edit curation feed{' '}
            <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            Notifications{' '}
            <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            {' '}
            Change pin <Feather name="chevron-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
