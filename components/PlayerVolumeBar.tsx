import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type PlayerControlProps = {
    style?: ViewStyle
}
const PlayerVolumeBar = ({ style }: PlayerControlProps) => {
    return (
        <View>
            <Text>PlayerVolumeBar</Text>
        </View>
    )
}

export default PlayerVolumeBar

const styles = StyleSheet.create({})