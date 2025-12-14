import React, { useMemo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import TrackList from '@/components/TrackList'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import library from '@/assets/data/library.json'

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: "find in songs",
        }
    })

    const filteredSong = useMemo(() => {
        if (!search) return library;
        return library.filter(trackTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollViewStyle}>
                <TrackList track={filteredSong} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen

const styles = StyleSheet.create({
    scrollViewStyle: {
        paddingHorizontal: screenPadding.horizontal
    }
})