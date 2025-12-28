import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@/constants/tokens'
import { Slider } from 'react-native-awesome-slider'
import { utilsStyles } from '@/styles'
import { useTrackPlayerVolume } from '@/hooks/useTrackPlayerVolume'


const PlayerVolumeBar = ({ style }: ViewProps) => {
    const { volume, updateVolume } = useTrackPlayerVolume()

    const min = useSharedValue(0)
    const max = useSharedValue(1)
    const progress = useSharedValue(0)

    progress.value = volume ?? 0 


    return (
        <View style={style}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Ionicons name='volume-low' size={20} color={colors.icon} style={{ opacity: 0.8, }} />
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>


                    <Slider
                        progress={progress}
                        minimumValue={min}
                        maximumValue={max}
                        theme={{
                            minimumTrackTintColor: colors.minimumTrackTintColor,
                            maximumTrackTintColor: colors.maximumTrackTintColor
                        }}
                        containerStyle={utilsStyles.slider}
                        thumbWidth={0}
                        renderBubble={() => null}
                        onValueChange={(value) => {
                            updateVolume(value)
                        }}

                    />
                </View>
                <Ionicons name='volume-high' size={20} color={colors.icon} style={{ opacity: 0.8, }} />

            </View>
        </View>
    )
}

export default PlayerVolumeBar

const styles = StyleSheet.create({})