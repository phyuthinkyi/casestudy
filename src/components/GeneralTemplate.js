import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import colors from '../constants/colors';
import HeaderComponent from './HeaderComponent';
import MyStatusBar from './StatusBar';

const GeneralTemplate = ({
    children,
    scrollable = false,
    unsafeAreaStyle = {},
    style = {},
    contentContainerStyle = {},
    refreshControl,
    scrollToTop = false,
    safeTopOnly = false,
    showsVerticalScrollIndicator = false,
    bounces = true,
    scrollEnabled = true,
    hideHeader = false,
    statusBarColor = 'transparent',
    containerPadding,
    ...rest
}) => {
    const ViewGroup = scrollable ? ScrollView : View;
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollable && scrollToTop) {
            scrollRef?.current?.scrollTo({
                y: 0,
                animated: false,
            });
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar
                backgroundColor={colors.secondary}
            />
            {!hideHeader && <HeaderComponent {...rest} />}
            <ViewGroup
                ref={scrollRef}
                enableOnAndroid
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                style={[styles.content, style]}
                contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
                refreshControl={refreshControl}
                bounces={bounces}
                enableResetScrollToCoords={false}
                scrollEnabled={scrollEnabled}
                keyboardShouldPersistTaps="handled"
                automaticallyAdjustContentInsets={false}>
                <View style={{flex: 1, padding: containerPadding || 0}}>
                    {children}
                </View>
            </ViewGroup>
        </View>
    );
};

const styles = StyleSheet.create({
    container: paddingTop => ({
        paddingTop,
        flex: 1,
    }),
    content: {
        flex: 1,
        backgroundColor: colors.white,
    },
});

export default GeneralTemplate;
