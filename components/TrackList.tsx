import React from 'react'
import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import TrackPlayer, { Track } from 'react-native-track-player'

import { utilsStyles } from '@/styles'
import TrackListItems from './TrackListItems'

export type TrackListProps = Partial<FlatListProps<Track>> & {
    track: Track[]
}

const ItemDivider = () => (
    <View style={styles.divider} />
)

const TrackList = ({ track, ...flatlistProps }: TrackListProps) => {

    const handleTrackSelect = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }
    return (
        <FlatList
            data={track}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ListEmptyComponent={<View>
                <Text style={utilsStyles.emptyContentText}> No songs found</Text>
            </View>}
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