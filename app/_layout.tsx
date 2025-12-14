import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { SplashScreen, Stack } from 'expo-router'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// show the splash screen while loading the track player
SplashScreen.preventAutoHideAsync()

const App = () => {
    // hide the splash screen
    const handleTrackPlayerLoaded = useCallback(() => {
        SplashScreen.hideAsync()
    }, [])

    useSetupTrackPlayer({
        onLoad: handleTrackPlayerLoaded
    })
    useLogTrackPlayerState()
    return (
        <SafeAreaProvider>
            {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
            <RootNavigation />
            {/* <StatusBar style="auto" /> */}
            {/* </GestureHandlerRootView> */}
        </SafeAreaProvider>
    )
}

const RootNavigation = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default App