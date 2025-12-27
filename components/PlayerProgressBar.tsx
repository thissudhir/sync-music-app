import React from 'react'
import { Slider } from 'react-native-awesome-slider'
import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import { useSharedValue } from 'react-native-reanimated'

import { formatSecondsToMinute } from '@/helpers/miscellaneous'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles, utilsStyles } from '@/styles'


const PlayerProgressBar = ({ style }: ViewProps) => {
    const { duration, position } = useProgress(250)

    const isSliding = useSharedValue(false)
    const min = useSharedValue(0)
    const max = useSharedValue(1)
    const progress = useSharedValue(0)

    const trackElpsedTime = formatSecondsToMinute(position)
    const trackRemainingTime = formatSecondsToMinute(duration - position)

    if (!isSliding.value) {
        progress.value = duration > 0 ? position / duration : 0
    }

    return (
        <View style={style}>
            <Slider
                progress={position}
                minimumValue={min}
                maximumValue={max}
                theme={{
                    minimumTrackTintColor: colors.minimumTrackTintColor,
                    maximumTrackTintColor: colors.maximumTrackTintColor
                }}
                containerStyle={utilsStyles.slider}
                thumbWidth={0}
                renderBubble={() => null}
                onSlidingStart={() => (isSliding.value = true)}
                onValueChange={async (value) => {
                    await TrackPlayer.seekTo(value * duration)
                }}
                onSlidingComplete={async (value) => {
                    if (!isSliding.value) return

                    isSliding.value = false

                    await TrackPlayer.seekTo(value * duration)
                }}
            />
            <View style={styles.timeRow}>
                <Text style={styles.timeText}>{trackElpsedTime}</Text>
                <Text style={styles.timeText}>{'-'}{trackRemainingTime}</Text>
            </View>
        </View>
    )
}

export default PlayerProgressBar

const styles = StyleSheet.create({
    timeText: {
        ...defaultStyles.text,
        color: colors.text,
        opacity: 0.7,
        fontSize: fontSize.xs,
        letterSpacing: 0.7,
        fontWeight: '500'
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 20
    }
})