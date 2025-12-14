import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabNavigation = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500'
                },
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={95}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                )
            }}>
            <Tabs.Screen
                name='(songs)'
                options={{
                    title: "Songs",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='music' size={20} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='favorites'
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='heart' size={20} color={color} />
                    )
                }} />
            <Tabs.Screen
                name='playlists'
                options={{
                    title: "Playlists",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='playlist-play' size={30} color={color} />
                    )
                }} />
            <Tabs.Screen
                name='artists'
                options={{
                    title: "Artists",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name='users-line' size={20} color={color} />
                    )
                }} />
        </Tabs>
    )
}

export default TabNavigation