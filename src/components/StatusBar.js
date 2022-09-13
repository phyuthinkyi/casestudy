import React from 'react';
import { View, StatusBar, Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const MyStatusBar = ({ backgroundColor }) => {
    return (
        <View
            style={{
                height: Platform.OS === 'ios' ? 44 : StatusBarManager.HEIGHT,
                backgroundColor,
            }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={'dark-content'}
                translucent={true}
            />
        </View>
    );
};

export default MyStatusBar;
