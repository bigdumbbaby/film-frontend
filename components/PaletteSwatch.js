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
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
  },
});
