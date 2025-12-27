import { colors } from '@/constants/tokens'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'

type PlayerControlProps = {
  style?: ViewStyle
}

type PlayerButtonsProps = {
  styles?: ViewStyle,
  iconSize?: number,
}
export const PlayerControls = ({ style }: PlayerControlProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SkipToPreviousButton iconSize={42} />
        <PlayPauseButton iconSize={44} />
        <SkipToNextButton iconSize={42} />
      </View>
    </View>
  )
}

export const PlayPauseButton = ({ styles, iconSize }: PlayerButtonsProps) => {
  const { playing } = useIsPlaying()
  return (
    <View style={[{ height: iconSize }, styles]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
      >
        <FontAwesome6
          name={`${playing ? "pause" : "play"}`}
          size={iconSize}
          color={colors.text} />
      </TouchableOpacity>
    </View>
  )
}

export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonsProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => TrackPlayer.skipToNext()}
    >
      <FontAwesome6
        name='forward'
        size={iconSize}
        color={colors.text} />
    </TouchableOpacity>
  )
}

export const SkipToPreviousButton = ({ iconSize = 30 }: PlayerButtonsProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => TrackPlayer.skipToPrevious()}
    >
      <FontAwesome6
        name='backward'
        size={iconSize}
        color={colors.text} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})