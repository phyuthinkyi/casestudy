import React, { useState } from "react";
import GeneralTemplate from "../components/GeneralTemplate";
import SearchComponent from "./components/SearchComponent";
import SearchUserListComponent from "./components/SearchUserListComponent";

const SearchScreen = () => {
    const [userList, setUserList] = useState([])
    const [searchUser, setSearchUser] = useState(null)

    const onSearchHandle = (data) => {
        setUserList(data?.userList)
        setSearchUser(data?.searchUser)
    }
    
    return (
        <GeneralTemplate containerPadding={16} hideHeader>
            <SearchComponent onSearchHandle={onSearchHandle} />
            {userList?.length > 0 && <SearchUserListComponent searchUser={searchUser} userList={userList} />}
        </GeneralTemplate>
    )
}

export default SearchScreen;