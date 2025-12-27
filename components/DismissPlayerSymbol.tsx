import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DismissPlayerSymbol = () => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ ...styles.mainContainer, top: top + 8 }}>
            <View accessible={false} style={styles.accessibleContainer} />
        </View>
    )
}

export default DismissPlayerSymbol

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    accessibleContainer: {
        width: 50,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        opacity: 0.7,
    }
})