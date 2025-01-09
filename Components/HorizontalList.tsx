import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { Song } from '@/types';
import SongHorizontal from './SongHorizontal';

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={songs}
                renderItem={({ item }) => <SongHorizontal item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        // paddingBottom: 20,
    },
});

export default SongList;
