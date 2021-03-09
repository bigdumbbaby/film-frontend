import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function FilmCard({ film, handlePress, setSelectedFilm }) {
  const posterURL = 'https://image.tmdb.org/t/p/w300' + film.poster_path
  const cardPressHandler = () => {
    setSelectedFilm(film)
    handlePress()
  }
  return (
    <View style={styles.filmCard}>
      <View className='film-text'>
        <Text>{film.title}</Text>
      </View>
      <TouchableHighlight onPress={cardPressHandler}>
        <Image 
        source={{uri: posterURL}}
        style={{width: 162, height: 240}}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filmCard: {
    flex: 1,
  }
});
