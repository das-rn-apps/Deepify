import React, { useEffect, useState } from 'react';
import { Button, View, Modal, StyleSheet } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { useAuth } from '@/Context/AuthContext';
import { Color } from '@/Constants/Color';

const CLIENT_ID = '60ee25b50fd04f00b8c1d33555006739';
const SCOPES = ['user-read-private', 'user-read-email'];
const REDIRECT_URI = AuthSession.makeRedirectUri();

const DISCOVERY = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const LoginPage = () => {
    const { setAccessToken } = useAuth();
    const [modalVisible, setModalVisible] = useState<boolean>(true);

    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: CLIENT_ID,
            scopes: SCOPES,
            redirectUri: REDIRECT_URI,
            responseType: 'token',
        },
        DISCOVERY
    );

    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            setAccessToken(access_token);
            setModalVisible(false);
        }
    }, [response]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Button
                        title="Login with Spotify"
                        onPress={() => promptAsync()}
                        disabled={!request}
                        color="#1DB954"  // Spotify Green color for button
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background.overlay,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 15,   // Rounded corners for a modern look
        width: '80%',       // Responsive width
        alignItems: 'center',
        shadowColor: '#000', // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,        // Shadow effect on Android
    },
});

export default LoginPage;
