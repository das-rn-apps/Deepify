import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Color } from '@/Constants/Color'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

export default function Find() {
    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.text}>Find</Text>
            <Pressable onPress={() => { router.push(`/(app)/(tabs)/find/filter`) }}>
                <Text>
                    Go to filter
                </Text>
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: Color.text.primaryDark,
        fontSize: 20,
    }
})
