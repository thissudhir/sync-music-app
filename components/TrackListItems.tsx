import { Entypo, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import LoaderKit from 'react-native-loader-kit'
import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'

import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'

export type TrackListItemsProps = {
    track: Track,
    onTrackSelect: (track: Track) => void
}
const TrackListItems = ({ track, onTrackSelect: handleTrackSelect }: TrackListItemsProps) => {
    const { playing } = useIsPlaying()
    const isActiveTrack = useActiveTrack()?.url === track.url
    return (
        <TouchableHighlight onPress={() => handleTrackSelect(track)}>
            <View style={styles.trackItemContainer}>
                <View>
                    <Image
                        source={{
                            uri: track.artwork,
                        }}
                        style={{
                            ...styles.trackArtWorkImage,
                            opacity: isActiveTrack ? 0.6 : 1
                        }}
                    />
                    {isActiveTrack && (playing ?
                        <LoaderKit style={styles.trackPlayingIconIndicator} name='LineScaleParty' color={colors.icon} />
                        :
                        <Ionicons style={styles.trackPauseIconIndicator} name='play' size={24} color={colors.icon} />
                    )}
                </View>
                <View style={styles.trackDetailContainer}>
                    <View style={{ width: "100%" }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.trackTitleText,
                                color: isActiveTrack ? colors.primary : colors.text
                            }}
                        >
                            {track.title}
                        </Text>
                        {track.artist && (
                            <Text
                                numberOfLines={1}
                                style={styles.trackArtistText}
                            >
                                {track.artist}
                            </Text>
                        )}
                    </View>
                    <Entypo name='dots-three-horizontal' size={18} color={colors.icon} />
                </View>
            </View>
        </TouchableHighlight >
    )
}

export default TrackListItems

const styles = StyleSheet.create({
    trackArtWorkImage: {
        borderRadius: 8,
        width: 50,
        height: 50
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: "90%"

    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,

    },
    trackItemContainer: {
        flexDirection: "row",
        columnGap: 14,
        alignItems: "center",
        paddingRight: 20
    },
    trackDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trackPlayingIconIndicator: {
        position: 'absolute',
        left: 16,
        width: 16,
        height: 16,
        top:18,
    },
    trackPauseIconIndicator: {
        position: 'absolute',
        left: 14,
        top:14,
    } 
})