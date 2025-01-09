import { Color } from '@/Constants/Color';
import { Category } from '@/types';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {

    const OnGo = () => {
        router.push({
            pathname: `/(app)/(tabs)/home/details`,
            params: {
                category: JSON.stringify(category),
            },
        });
    };


    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => OnGo()}
        >
            <Image source={{ uri: category.icons[0].url }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '31%',
        margin: '1%',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: Color.shadows.light,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 7,
        backgroundColor: Color.background.overlay,  // Using overlay color
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Color.text.disabled,  // Using disabled text color
    },
});

export default CategoryCard;
