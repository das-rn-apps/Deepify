import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';
import { Color } from '@/Constants/Color';
import { Category } from '@/types';

interface CategoriesGridProps {
    categories: Category[];
}

const CategoriesGrid: React.FC<CategoriesGridProps> = ({ categories }) => {
    return (
        <ScrollView contentContainerStyle={styles.gridContainer}>
            {categories.map((category) => (
                <CategoryCard
                    key={category.id}
                    category={category}
                />
            ))}
        </ScrollView>
    );
};

// Styles for the grid
const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});

export default CategoriesGrid;
