import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, StyleProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'
import { StyleProp, TextStyle } from 'react-native'

export type MovingTitleProps = {
    title: string,
    animatedThreshold: number,
    style?: StyleProp<TextStyle>,
}

const MovingTitle = ({ title, animatedThreshold, style }: MovingTitleProps) => {
    const translateX = useSharedValue(0)
    const shouldAnimate = title.length >= animatedThreshold
    const textWidth = title.length * 3

    useEffect(() => {
        if (!shouldAnimate) return
        translateX.value = withDelay(1000,
            withRepeat(
                withTiming(
                    -textWidth,
                    {
                        duration: 5000,
                        easing: Easing.linear
                    }),
                -1,
                true
            ),
        )
    }, [translateX, title, animatedThreshold, shouldAnimate, textWidth])
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    })

    return (
        <Animated.Text numberOfLines={1} style={[
            style,
            animatedStyle,
            shouldAnimate && {
                width: 999,
                paddingLeft: 16
            }]}>
            {title}
        </Animated.Text>
    )
}

export default MovingTitle