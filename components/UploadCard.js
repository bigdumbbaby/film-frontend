import React from 'react'
import { View, Text, Image } from 'react-native'
import PaletteContainer from '../containers/PaletteContainer'

export default function UploadCard({uploadURL}) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Image 
          source={{uri: uploadURL}}
          style={{width: 162, height: 240, flex: 1, paddingTop: 10}}
          />
        <PaletteContainer poster={uploadURL}/>
      </View>
    </View>
  )
}
