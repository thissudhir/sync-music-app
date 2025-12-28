import { Event, useTrackPlayerEvents } from "react-native-track-player";


const events = [Event.PlaybackActiveTrackChanged, Event.PlaybackError, Event.PlaybackState]

export const useLogTrackPlayerState = () => {
    useTrackPlayerEvents(events, async (event) => {
        if (event.type === Event.PlayerError) {
            console.warn("[ERROR]: An error occurred!", event)
        }

        if (event.type === Event.PlaybackActiveTrackChanged) {
            console.log("[Track]: Track changed!", event.index)
        }

        if (event.type === Event.PlaybackState) {
            console.log("[Track]: Playback state changed!", event.state)
        }
    })
}