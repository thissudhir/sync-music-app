import { useEffect, useRef } from "react"
import TrackPlayer, { RepeatMode } from "react-native-track-player"


const setupPlayer = async () => {
    //to cache the song 
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10,
    })
    //default volume of the player & shuffle mode
    await TrackPlayer.setVolume(0.08)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
    const isInitialized = useRef(false)
    useEffect(() => {
        setupPlayer().then(() => {
            isInitialized.current = true,
                onLoad?.()
        }).catch((err) => {
            isInitialized.current = false,
                console.error(err)
        })
    }, [onLoad])
}