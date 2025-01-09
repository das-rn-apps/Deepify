import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Category } from '@/types';
import { Color } from '@/Constants/Color';
import { LinearGradient } from 'expo-linear-gradient';
import { getCategoryData } from '@/utility/api';
import { useAuth } from '@/Context/AuthContext';

const CategoryDetails = () => {
    const { category } = useLocalSearchParams<{ category: string }>();
    const [categoryData, setCategoryData] = useState<Category>();

    const parsedCategory: Category = JSON.parse(category);
    const { accessToken } = useAuth();

    useEffect(() => {
        if (accessToken) {
            getCategoryData(accessToken, parsedCategory.id).then(setCategoryData);
        }
        console.log(categoryData);
    }, [accessToken]);

    return (
        <LinearGradient
            colors={Color.gradients.background2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.categoryName}>{parsedCategory?.name}</Text>
                <Text style={styles.categoryId}>Category ID: {parsedCategory?.id}</Text>
                <Text style={styles.categoryHref}>Category HREF: {parsedCategory?.href}</Text>
            </View>
            {/* Add additional sections if necessary */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Category details loaded successfully!</Text>
            </View>
        </LinearGradient>
    );
};

export default CategoryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: Color.background.cardDark,
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20,
        shadowColor: Color.shadows.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 6,
    },
    categoryName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.text.primaryDark,
    },
    categoryId: {
        fontSize: 18,
        color: Color.text.secondaryDark,
        marginTop: 10,
    },
    categoryHref: {
        fontSize: 16,
        color: Color.text.placeholder,
        marginTop: 5,
    },
    footer: {
        padding: 20,
        marginTop: 30,
        backgroundColor: Color.background.cardDark,
        borderRadius: 10,
        shadowColor: Color.shadows.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    footerText: {
        fontSize: 14,
        color: Color.text.secondaryLight,
        textAlign: 'center',
    },
});
