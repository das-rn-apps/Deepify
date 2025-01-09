import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

interface AuthContextType {
    accessToken: string | null;
    userInfo: any | null;
    setAccessToken: (token: string) => void;
    setUserInfo: (user: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accessToken, setAccessTokenState] = useState<string | null>(null);
    const [userInfo, setUserInfoState] = useState<any | null>(null);

    // Set the access token to local storage (SecureStore)
    const setAccessToken = (token: string) => {
        setAccessTokenState(token);
        SecureStore.setItemAsync('spotify_token', token);
    };

    const setUserInfo = (user: any) => {
        setUserInfoState(user);
    };

    const logout = () => {
        setAccessTokenState(null);
        setUserInfoState(null);
        SecureStore.deleteItemAsync('spotify_token');
    };

    // Check if a token exists when the app first loads
    useEffect(() => {
        const fetchToken = async () => {
            const token = await SecureStore.getItemAsync('spotify_token');
            if (token) {
                setAccessTokenState(token);
            }
        };
        fetchToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                userInfo,
                setAccessToken,
                setUserInfo,
                logout,
            }
            }
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
