import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Song } from '@/types';
import { Color } from '@/Constants/Color';

interface SongItemProps {
    item: Song;
}

const SongItem: React.FC<SongItemProps> = ({ item }) => (
    <View style={styles.songItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.songImage} />
        <View >
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
            {/* <Text style={styles.songDuration}>{item.duration}</Text> */}
        </View>
    </View>
);

const styles = StyleSheet.create({
    songItem: {
        width: 160,
        height: 200,
        // backgroundColor: Color.background.dark,
        padding: 10,
        margin: 1,
    },
    songImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
    },
    songTitle: {
        fontSize: 15,
        fontWeight: '400',
        color: Color.text.primaryDark,
    },
    songArtist: {
        fontSize: 12,
        color: Color.text.disabled,
    }
});

export default SongItem;
