import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { screenPadding } from '@/constants/tokens'

const PlayerScreen = () => {
    return (
        <View style={styles.overlayContainer}>
            <Text>PlayerScreen</Text>
        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    overlayContainer: {
        ...defaultStyles.container,
        paddingHorizontal: screenPadding.horizontal,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
})