import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function PaletteSwatch({ color }) {
  return (
    <View
    style={[
      styles.circle, {backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`},]}>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 100 / 2,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 2,
    padding: 10
  },
});
