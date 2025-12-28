import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React, { ComponentProps } from 'react'
import { RepeatMode } from 'react-native-track-player'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { match } from 'ts-pattern'
import { colors } from '@/constants/tokens';
import { useTrackPlayerRepeatMode } from '@/hooks/useTrackPlayerRepeatMode';

type IconProps = Omit<ComponentProps<typeof MaterialCommunityIcons>, 'name'>
type IconName = ComponentProps<typeof MaterialCommunityIcons>['name']

const repeatOrder = [
    RepeatMode.Off,
    RepeatMode.Track,
    RepeatMode.Queue,
] as const;

const PlayerToggleRepeat = ({ ...iconProps }: IconProps) => {
    const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode()

    const toggleRepeatMode = () => {
        if (repeatMode == null) return

        const currentIndex = repeatOrder.indexOf(repeatMode)
        const nextIndex = (currentIndex + 1) % repeatOrder.length

        changeRepeatMode(repeatOrder[nextIndex])
    }

    const icons = match(repeatMode)
        .returnType<IconName>()
        .with(RepeatMode.Off, () => 'repeat-off')
        .with(RepeatMode.Track, () => 'repeat-once')
        .with(RepeatMode.Queue, () => 'repeat')
        .otherwise(() => 'repeat-off')
    return (
        <MaterialCommunityIcons name={icons} color={colors.icon} {...iconProps} onPress={toggleRepeatMode} />
    )
}

export default PlayerToggleRepeat

const styles = StyleSheet.create({})