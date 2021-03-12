import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';


export default function FilterButtons({setFilmFilter, setPageNumber, handleUploadClick}) {
  return (
    <View style={styles.selectorButtonsContainer}>
        <Button
          style={styles.filterButton}
          title="Upcoming"
          type="outline"
          onPress={()=> {
            setFilmFilter('upcoming') 
            setPageNumber(1)
          }}
        />
        <Button
          style={styles.filterButton}
          title="Now Playing"
          type="outline"
          onPress={()=> {
            setFilmFilter('now_playing')
            setPageNumber(1)
        }}
        />
        <Button
          style={styles.filterButton}
          title="Top Rated"
          type="outline"
          onPress={()=>{
            setFilmFilter('top_rated')
            setPageNumber(1)
        }}
        />
        {/* <Button
          style={styles.filterButton}
          title="Upload"
          type="outline"
          onPress={()=>{
            handleUploadClick()
            setPageNumber(1)
        }}
        /> */}
        
      </View>
  )
}

const styles = StyleSheet.create({
  selectorButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterButton: {
    padding: 5,
  }
});
