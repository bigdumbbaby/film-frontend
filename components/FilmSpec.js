import React from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import PaletteSwatch from './PaletteSwatch'
import { Button } from 'react-native-elements';

export default function FilmSpec({handlePress, selectedFilm}) {
  const [film, setFilm] = useState({})
  const [palettes, setPalette] = useState([])
  const [textColor, setTextColor] = useState([])
  const [backgroundColor, setBackgroundColor] = useState([])

  function checkBrightness(color){ 
    const brightness = Math.round(((parseInt(color[0]) * 299) + (parseInt(color[1]) * 587) + (parseInt(color[2]) * 114)) / 1000)
    if(brightness < 150){
      setTextColor("rgb(255,255,255)")
    } else {
      setTextColor("rgb(0,0,0)")
    }
  }

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/films/${selectedFilm.id}`)
      .then(response => response.json())
      .then(filmData => setFilm(filmData))
      fetch(`https://film-backend.herokuapp.com/getColorPalette?poster=${`https://image.tmdb.org/t/p/w300` + selectedFilm.poster_path}&palette_num=9`)
        .then(response => response.json())
        .then(colors => {
          checkBrightness(colors[1])
          setBackgroundColor(colors[1])
          setPalette(colors)
        })
  }, [])

  const posterURL = 'https://image.tmdb.org/t/p/w300' + film.poster_path
  return (
    <View>
      <Button
          title="Back"
          type="outline"
          onPress={handlePress}
          style={{padding: 5}}
      />
      <View 
        style={[
        styles.filmCard, {
          backgroundColor: "rgb(" + backgroundColor[0] + "," + backgroundColor[1]  + "," + backgroundColor[2]  + ")"
        },]}
        >
        <View style={styles.posterAndPalette}>
          <Image 
            source={{uri: posterURL}}
            style={{width: 162, height: 240}}
            />
          <View style={styles.textAndPalette}>
            <Text style={[
              styles.paletteText, {color: textColor},]}>Color Palette:</Text>
            <View style={styles.paletteCard}>
              {palettes.map(palette => <PaletteSwatch key={palette} color={palette}/>)}
            </View> 
          </View>
        </View>
        <Text style={[
        styles.text, {color: textColor},]}>{film.title}</Text>
        <Text style={[
        styles.titleText, {color: textColor},]}>Overview:</Text>
        <Text style={[
        styles.text, {color: textColor},]}>{film.overview}</Text>
        <Text style={[
        styles.titleText, {color: textColor},]}>Average Rating:</Text>
        <Text style={[
        styles.text, {color: textColor},]}>{film.vote_average}</Text>
        <Text style={[
        styles.titleText, {color: textColor},]}>Release Date:</Text>
        <Text style={[
        styles.text, {color: textColor},]}>{film.release_date}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  paletteCard: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 120,
    paddingTop: 20
  },
  filmCard: {
    flex: 1,
    flexDirection: 'column',

  },
  posterAndPalette: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'HelveticaNeue-Medium'
  },
  titleText: {
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'HelveticaNeue-Medium'
  },
  paletteText: {
    paddingTop: 5,
    fontFamily: 'HelveticaNeue-Medium'
  },
  textAndPalette: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingTop: 20,
  }
});
