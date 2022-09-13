import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native'
import colors from "../constants/colors";

const ModalComponent = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.modalCtn}>
                <View style={styles.modalContent}>
                    <Text style={styles.sorryText}>Sorry!</Text>
                    <Text style={styles.infoText}>This user name does not exist! Please specify an existing user name!</Text>
                    <TouchableOpacity style={styles.okBtn} onPress={onClose}>
                        <Text style={styles.okText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalComponent;

const styles = StyleSheet.create({
    modalCtn: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: Dimensions.get('screen').width - 64,
        backgroundColor: colors.white,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    okBtn: {
        height: 48,
        paddingHorizontal: 20,
        minWidth: 150,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    sorryText: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    infoText: {
        marginTop: 10,
        color: colors.black,
        fontSize: 16,
        textAlign:'center'
    },
    okText: {
        color: colors.white,
        fontSize: 16
    }
})