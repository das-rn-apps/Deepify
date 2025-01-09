import { Color } from '@/Constants/Color';
import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="details" options={{
                    title: "Category list",
                    headerTintColor: Color.text.primaryLight,
                }} />
            </Stack>
        </>
    );
}
