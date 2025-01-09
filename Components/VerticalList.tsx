import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { Song } from '@/types';
import SongHorizontal from './SongHorizontal';

interface VerticalListProps {
    songs: Song[];
}

const VerticalList: React.FC<VerticalListProps> = ({ songs }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={songs}
                renderItem={({ item }) => <SongHorizontal item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingBottom: 20,
    },
});

export default VerticalList;
