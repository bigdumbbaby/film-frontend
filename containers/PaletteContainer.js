import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PaletteSwatch from '../components/PaletteSwatch'

export default function PaletteContainer({poster}) {
  const [palettes, setPalette] = useState([])

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/getColorPalette?poster=${poster}&palette_num=9`)
      .then(response => response.json())
      .then(colors => {
        setPalette(colors)
      })
}, [])

  return (
    <View style={styles.paletteCard}>
      <Text>Color Palette:</Text>
      {palettes.map(palette => <PaletteSwatch key={palette} color={palette}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  paletteCard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
    width: 120,
    paddingEnd: 0
  },
});