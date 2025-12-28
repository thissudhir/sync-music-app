import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles, utilsStyles } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import DismissPlayerSymbol from '@/components/DismissPlayerSymbol'
import { useActiveTrack } from 'react-native-track-player'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MovingTitle from '@/components/MovingTitle'
import { FontAwesome } from '@expo/vector-icons'
import { PlayerControls, PlayPauseButton, SkipToNextButton, SkipToPreviousButton } from '@/components/PlayerControls'
import PlayerProgressBar from '@/components/PlayerProgressBar'
import PlayerVolumeBar from '@/components/PlayerVolumeBar'
import PlayerToggleRepeat from '@/components/PlayerToggleRepeat'

const PlayerScreen = () => {
    const { top, bottom } = useSafeAreaInsets()
    const isFavroite = false

    const toggleFavroite = () => {
        console.log("Pressed the favroite button")
    }
    const activeTrack = useActiveTrack();
    if (!activeTrack) {
        return (
            <View style={[defaultStyles.container, { justifyContent: "center" }]}>
                <ActivityIndicator />
            </View>
        )
    }


    return (
        <View style={styles.overlayContainer}>
            <DismissPlayerSymbol />
            <View style={{ flex: 1, top: top + 70, marginBottom: bottom }}>
                <View style={styles.artWorkImageContainer}>

                    <Image
                        style={styles.artWorkImage}
                        source={{
                            uri: activeTrack.artwork
                        }}
                    />
                </View>

                <View style={{ flex: 1 }}>

                    <View style={{ marginTop: 20 }}>
                        <View style={{ height: 60, }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: "center"
                                }}>
                                {/* TRACK TITLE  */}
                                <View style={styles.trackTitleContainer}>
                                    <MovingTitle
                                        title={activeTrack.title ?? ""}
                                        animatedThreshold={30}
                                        style={styles.trackTitleText}
                                    />
                                </View>
                                {/* FAVROITE BUTTON  */}
                                <FontAwesome
                                    name={isFavroite ? "heart" : 'heart-o'}
                                    size={20}
                                    color={isFavroite ? colors.primary : colors.icon}
                                    style={{ marginHorizontal: 14 }}
                                    onPress={toggleFavroite}
                                />
                            </View>
                            {/* ARTIST NAME  */}
                            {activeTrack.artist && (
                                <Text
                                    numberOfLines={1}
                                    style={[styles.trackArtistTrack, { marginTop: 1 }]}
                                >
                                    {activeTrack.artist}
                                </Text>
                            )}
                            {/* CONTROLS  */}

                        </View>
                        <PlayerProgressBar style={{ marginTop: 2 }} />
                        <PlayerControls style={{ marginTop: 40 }} />

                    </View>
                    <PlayerVolumeBar style={{ marginTop: 40, marginBottom: 30 }} />
                    <View style={utilsStyles.centeredRow}>
                        <PlayerToggleRepeat size={30} style={{ marginTop: 6 }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    overlayContainer: {
        ...defaultStyles.container,
        paddingHorizontal: screenPadding.horizontal,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    artWorkImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 12
    },
    artWorkImageContainer: {
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 1.0,
        flexDirection: 'row',
        justifyContent: "center",
        height: '45%'
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: 22,
        fontWeight: '700'
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden'
    },
    trackArtistTrack: {
        ...defaultStyles.text,
        fontSize: fontSize.base,
        opacity: 0.8,
        minWidth: '90%'
    }
})