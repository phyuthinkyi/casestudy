import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
} from 'react-native';
import ModalComponent from '../../components/ModalComponent';
import colors from '../../constants/colors';
import userlist from '../../userlist';

const SearchComponent = ({onSearchHandle}) => {
  const [searchName, setSearchName] = useState('');
  const [modifiedUserList, setModifiedUserList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let modifiedList = [];
    for (const key in userlist) {
      modifiedList.push(userlist[key]);
    }
    modifiedList.sort((a, b) => {
      return a.bananas < b.bananas;
    });
    modifiedList.map((item, index) => (item.rank = index + 1));
    setModifiedUserList(modifiedList);
  }, []);

  const onSearch = () => {
    const searchUser = modifiedUserList.find(
      user => user.name.toLowerCase() == searchName.toLowerCase(),
    );
    if (searchUser) {
      const indexOfUser = modifiedUserList.indexOf(searchUser);
      const searchList = modifiedUserList;
      if (indexOfUser < 10) {
        onSearchHandle({
          userList: searchList.slice(0, 10),
          searchUser: searchUser,
        });
      } else {
        let list = searchList.slice(0, 9);
        list.push(searchUser);
        onSearchHandle({
          userList: list,
          searchUser: searchUser,
        });
      }
    } else {
      setModalVisible(true);
      onSearchHandle({
        userList: [],
        searchUser: null,
      });
    }
    Keyboard.dismiss();
  };

  const onChangeText = text => setSearchName(text);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputCtn}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.searchImg}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="User name.."
          value={searchName}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={() => onSearch()} style={styles.searchBtn}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
      <ModalComponent
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSearchName('');
        }}
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInputCtn: {
    width: '48%',
    alignItems: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    height: 48,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  searchImg: {
    width: 15,
    height: 15,
    marginRight: 5,
    tintColor: colors.gray,
  },
  searchInput: {
    height: 48,
    flex: 1,
  },
  searchBtn: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  btnText: {
    color: colors.primary,
  },
});
