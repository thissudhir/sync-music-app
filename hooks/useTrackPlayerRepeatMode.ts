import { useCallback, useEffect, useState } from "react"
import TrackPlayer, { RepeatMode } from "react-native-track-player"

export const useTrackPlayerRepeatMode = () => {
    const [repeatMode, setRepeatmode] = useState<RepeatMode>()

    const changeRepeatMode = useCallback(async (repeatMode: RepeatMode) => {
        await TrackPlayer.setRepeatMode(repeatMode)
        setRepeatmode(repeatMode)
    }, [])

    useEffect(() => {
        TrackPlayer.getRepeatMode().then(setRepeatmode)
    }, [])

    return { changeRepeatMode, repeatMode  }
}