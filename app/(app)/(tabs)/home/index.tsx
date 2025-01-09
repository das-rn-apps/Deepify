import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getCategories } from '@/utility/api';
import { useAuth } from '@/Context/AuthContext';
import CategoriesGrid from '@/Components/Home/CategoriesGrid';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '@/Constants/Color';

const App = () => {
    const { accessToken } = useAuth();
    const [categories, setCategories] = useState<any>(null);

    useEffect(() => {
        if (accessToken) {
            getCategories(accessToken).then(setCategories);
        }
    }, [accessToken]);

    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView style={styles.container}>
                {categories ? (
                    <>
                        <Text style={styles.categories}>Category</Text>
                        <CategoriesGrid categories={categories} />
                    </>
                ) : (
                    <Text>Loading categories...</Text>
                )}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    pageContent: { marginTop: 20 },
    header: { fontSize: 18, fontWeight: 'bold' },
    categories: { marginTop: 20, padding: 5, fontSize: 25, fontWeight: "bold", textAlign: "center" },
    category: { backgroundColor: "red", marginVertical: 5, width: 100, height: 100 },
    userInfo: { marginTop: 10, fontSize: 16 },
});

export default App;
