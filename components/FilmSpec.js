import React from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import PaletteSwatch from './PaletteSwatch'

export default function FilmSpec({handlePress, selectedFilm}) {
  const [film, setFilm] = useState({})
  const [palettes, setPalette] = useState([])
  const [textColor, setTextColor] = useState([])
  const [backgroundColor, setBackgroundColor] = useState([])

  function checkBrightness(color){ 
    const brightness = Math.round(((parseInt(color[0]) * 299) + (parseInt(color[1]) * 587) + (parseInt(color[2]) * 114)) / 1000)
    if(brightness < 150){
      setTextColor("white")
    } else {
      setTextColor("black")
    }
  }

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/films/${selectedFilm.id}`)
      .then(response => response.json())
      .then(filmData => setFilm(filmData))
      fetch(`https://film-backend.herokuapp.com/getColorPalette?poster_path=${selectedFilm.poster_path}&palette_num=7`)
        .then(response => response.json())
        .then(colors => {
          checkBrightness(colors[1])
          setBackgroundColor(colors[1])
          setPalette(colors)
        })
  }, [])

  const posterURL = 'https://image.tmdb.org/t/p/w300' + film.poster_path
  return (
    <View 
      style={[
      styles.paletteCard, {
        backgroundColor: "rgb(" + backgroundColor[0] + "," + backgroundColor[1]  + "," + backgroundColor[2]  + ")"
      },]}
      >
      <TouchableHighlight onPress={handlePress}>
        <Text>Back</Text>
      </TouchableHighlight>
      <Image 
        source={{uri: posterURL}}
        style={{width: 162, height: 240}}
        />
        <View style={styles.paletteCard}>
          {palettes.map(palette => <PaletteSwatch key={palette} color={palette}/>)}
        </View>
      <Text style={[
      styles.text, {color: textColor},]}>{film.title}</Text>
      <Text style={[
      styles.text, {color: textColor},]}>{film.overview}</Text>
      <Text style={[
      styles.text, {color: textColor},]}>{film.popularity}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  paletteCard: {
  },
  filmCard: {

  }
});
