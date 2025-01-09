import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { getUserInfo } from '@/utility/api';
import LoginPage from '@/Components/Home/LoginPage';
import { useAuth } from '@/Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '@/Constants/Color';
import { router } from 'expo-router';

const App = () => {
    const { accessToken, userInfo, setUserInfo } = useAuth();

    useEffect(() => {
        if (accessToken) {
            getUserInfo(accessToken).then(setUserInfo);
        }
    }, [accessToken]);

    useEffect(() => {
        if (userInfo) {
            router.replace(`/(app)/(tabs)/home`);
        }
    }, [userInfo]);

    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView style={styles.container}>
                {!userInfo ? (
                    <LoginPage />
                ) : (
                    <View />
                )}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 }
});

export default App;
