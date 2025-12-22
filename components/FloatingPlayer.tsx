import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import { Track, useActiveTrack } from 'react-native-track-player'

import { PlayPauseButton, SkipToNextButton } from '@/components/PlayerControls'
import { colors } from '@/constants/tokens'
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack'
import { defaultStyles } from '@/styles'
import MovingTitle from './MovingTitle'

const FloatingPlayer = ({ style }: ViewProps) => {
    const activeTrack = useActiveTrack()
    const lastActiveTrack = useLastActiveTrack()

    if (!activeTrack) return null

    const displayTrack = activeTrack ?? lastActiveTrack

    return (
        <TouchableOpacity activeOpacity={0.9} style={[
            styles.container, style
        ]}>
            <>
                <Image
                    source={{
                        uri: displayTrack.artwork,
                    }}
                    style={styles.trackArtWorkImage}
                />
                <View style={styles.trackTitleContainer}>
                    <MovingTitle title={displayTrack.title} style={styles.trackTitleText}/>
                </View>
                <View style={styles.trackControlContainer}>
                    <PlayPauseButton iconSize={24} />
                    <SkipToNextButton iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    trackArtWorkImage: {
        borderRadius: 8,
        width: 40,
        height: 40
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10
    },
    trackControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#252525",
        padding: 8,
        paddingVertical: 10,
        borderRadius: 12
    }

})