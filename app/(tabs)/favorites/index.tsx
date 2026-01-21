import TrackList from '@/components/TrackList'
import { defaultStyles } from '@/styles'
import React, { useMemo } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import library from '@/assets/data/library.json'
import { screenPadding } from '@/constants/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { useFavorite } from '@/store/library'
import { trackTitleFilter } from '@/helpers/filter'
const FavoritesScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: "Find in favorite"
        }
    })
    const favoriteTracks = useFavorite().favroite
    const filteredFavoriteTracks = useMemo(() => {
        if (!search) return favoriteTracks
        return favoriteTracks.filter(trackTitleFilter(search))
    }, [search, favoriteTracks])

    return (
        <View style={defaultStyles.container}>
            <ScrollView style={{ paddingHorizontal: screenPadding.horizontal }} contentInsetAdjustmentBehavior='automatic'>
                <TrackList scrollEnabled={false} track={filteredFavoriteTracks} />
            </ScrollView>
            <Text style={defaultStyles.text}>FavoritesScreen</Text>
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({})