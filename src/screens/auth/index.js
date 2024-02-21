import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthMenu from '../../components/auth/menu';
import AuthDetails from '../../components/auth/details';
import styles from './styles';

const AuthScreen = () => {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);
  return (
    <View style={styles.container}>
      {detailsPage ? (
        <AuthDetails
          authPage={authPage}
          setAuthPage={setAuthPage}
          setDetailsPage={setDetailsPage}
        />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
};

export default AuthScreen;
