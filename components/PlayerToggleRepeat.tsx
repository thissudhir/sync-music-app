import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type PlayerControlProps = {
    style?: ViewStyle,
    size: number
}
const PlayerToggleRepeat = ({ style, size }: PlayerControlProps) => {
    return (
        <View>
            <Text>PlayerToggleRepeat</Text>
        </View>
    )
}

export default PlayerToggleRepeat

const styles = StyleSheet.create({})