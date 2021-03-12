import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useState } from 'react'
import PaletteContainer from '../containers/PaletteContainer'

export default function FilmCard({ film, handlePress, setSelectedFilm }) {
  const [isShowPalette, setIsShowPalette] = useState(false)

  const posterURL = 'https://image.tmdb.org/t/p/w300' + film.poster_path

  const cardPressHandler = () => {
    setSelectedFilm(film)
    handlePress()
  }

  function handleLongPress(){
    setIsShowPalette(!isShowPalette)
  }

  return (
    <View style={styles.filmCard}>
      <TouchableHighlight 
        style={styles.posterTouchable} 
        onPress={cardPressHandler}
        onLongPress={handleLongPress}
        >
        <Image 
        source={{uri: posterURL}}
        style={{width: 162, height: 240, flex: 1}}
        />
      </TouchableHighlight>
      <View style={styles.filmTextContainer}>
        <Text style={styles.filmText}>{film.title}</Text>
        {isShowPalette
          ? <PaletteContainer poster={`https://image.tmdb.org/t/p/w300` + film.poster_path}/>
          : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  filmCard: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    shadowOffset: {
      width: 5,
      heighth: 5
    },
    shadowColor: 'rgb(128,128,128)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  filmText: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '5%',
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Medium'
  },
  filmTextContainer: {
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 10
  },
  posterTouchable: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 162, 
    height: 240,
  }
});
