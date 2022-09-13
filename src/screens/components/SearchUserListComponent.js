import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import ContentRow from './ContentRow';
import TitleRow from './TitleRow';

const SearchUserListComponent = ({userList, searchUser}) => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <TitleRow />
      <FlatList
        data={userList}
        renderItem={({item, index}) => (
          <ContentRow searchUser={searchUser} user={item} key={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchUserListComponent;
