import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '@/Constants/Color'
import { LinearGradient } from 'expo-linear-gradient'

export default function Profile() {
    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.text}>Profile</Text>
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
