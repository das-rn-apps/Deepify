import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Color } from '@/Constants/Color'
import { LinearGradient } from 'expo-linear-gradient'
import { Songs } from '@/Constants/Songs'
import HorizontalList from '@/Components/HorizontalList'
import VerticalList from '@/Components/VerticalList'

export default function Index() {
    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <FlatList
                data={[]} // No main data items
                renderItem={null}
                ListHeaderComponent={
                    <>
                        <HorizontalList songs={Songs} />
                        {/* <HorizontalList songs={Songs} /> */}
                    </>
                }
                ListFooterComponent={
                    <>
                        <VerticalList songs={Songs} />
                        {/* <HorizontalList songs={Songs} /> */}
                    </>
                }
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.scrollContainer}
            />

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
    },
    scrollContainer: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        // paddingHorizontal: 16,
        // paddingBottom: 16,
    },
})
