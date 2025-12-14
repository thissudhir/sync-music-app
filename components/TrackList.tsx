import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native'
import { Track } from 'react-native-track-player'

import { utilsStyles } from '@/styles'
import TrackListItems from './TrackListItems'

export type TrackListProps = Partial<FlatListProps<Track>> & {
    track: Track[]
}

const ItemDivider = () => (
    <View style={styles.divider} />
)

const TrackList = ({ track, ...flatlistProps }: TrackListProps) => {

    const handleTrackSelect = (track: Track) => {
        console.log("[TRACK]: currently playing:", track)
    }
    return (
        <FlatList
            data={track}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => (
                <TrackListItems
                    track={track}
                    onTrackSelect={handleTrackSelect}
                />
            )}
            {...flatlistProps}
        />
    )
}

export default TrackList

const styles = StyleSheet.create({
    divider: {
        ...utilsStyles.itemSeparator,
        marginVertical: 9,
        marginLeft: 60,
    }
})