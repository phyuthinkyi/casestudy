import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import colors from "../../constants/colors";

const TitleRow = () => {
    return (
        <View style={styles.titleRowContainer}>
            <View style={[styles.titleTextContainer, {flex: 2}]}>
                <Text style={styles.titleText}>Name</Text>
            </View>
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>Rank</Text>
            </View>
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>Number of bananas</Text>
            </View>
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>isSearchUser?</Text>
            </View>
        </View>
    )
}

export default TitleRow;

const styles = StyleSheet.create({
    titleRowContainer: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
    },
    titleTextContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    titleText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14
    }

})