import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const ContentRow = ({user, searchUser}) => {
  return (
    <View style={styles.ContentRowContainer}>
      <View style={[styles.titleTextContainer, {flex: 2}]}>
        <Text
          style={[
            styles.titleText,
            {color: user == searchUser ? colors.red : colors.black},
          ]}>
          {user?.name || 'Empty Name'}
        </Text>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{user?.rank}</Text>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{user?.bananas}</Text>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>
          {user == searchUser ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );
};

export default ContentRow;

const styles = StyleSheet.create({
  ContentRowContainer: {
    flexDirection: 'row',
  },
  titleTextContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  titleText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
