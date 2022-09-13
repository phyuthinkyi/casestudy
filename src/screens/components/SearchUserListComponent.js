import React from "react";
import { ScrollView, View} from 'react-native'
import ContentRow from "./ContentRow";
import TitleRow from "./TitleRow";

const SearchUserListComponent = ({userList, searchUser}) => {
    return (
        <View style={{ flex: 1, marginTop: 20}}>
            <TitleRow />
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                userList.map((item, index) => {
                    return(
                        <ContentRow searchUser={searchUser} user={item} key={index} />
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

export default SearchUserListComponent;

