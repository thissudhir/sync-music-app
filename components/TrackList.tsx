import { utilsStyles } from '@/styles'
import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native'
import library from '@/assets/data/library.json'
import TrackListItems from './TrackListItems'

export type TrackListProps = Partial<FlatListProps<unknown>> & {
    track: any[]
}

const ItemDivder = () => (
    <View style={styles.divider} />
)

const TrackList = ({ track, ...flatlistProps }: TrackListProps) => {
    return (
        <FlatList
            data={track}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivder}
            ItemSeparatorComponent={ItemDivder}
            renderItem={({ item: track }) => (
                <TrackListItems
                    track={{
                        ...track,
                        image: track.artwork,
                    }}
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