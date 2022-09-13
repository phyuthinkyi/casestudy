import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Case Study</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
});
