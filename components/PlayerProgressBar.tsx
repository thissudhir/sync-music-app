import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type PlayerControlProps = {
    style?: ViewStyle
}
const PlayerProgressBar = ({ style }: PlayerControlProps) => {
    return (
        <View>
            <Text>PlayerProgressBar</Text>
        </View>
    )
}

export default PlayerProgressBar

const styles = StyleSheet.create({})