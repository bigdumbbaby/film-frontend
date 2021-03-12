import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';
import { useState } from 'react'

import Upload from './containers/Upload'
import FilmPage from './containers/FilmPage'

export default function App() {
  const [isUploadPage, setIsUploadPage] = useState(false)

  const handleUploadClick = () => {
    setIsUploadPage(!isUploadPage)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableHighlight style={styles.headerContainer} onPress={handleUploadClick}>
          {isUploadPage
            ? <Text style={styles.header}>Upload Photo</Text>
            : <Text style={styles.header}>Movie Poster Color Palette</Text>
          }
        </TouchableHighlight>
        {isUploadPage
          ? <Upload handleUploadClick={handleUploadClick}/>
          : <FilmPage handleUploadClick={handleUploadClick}/>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(1, 180, 228)',
    height: 100,
  },
  header: {
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'HelveticaNeue-UltraLight'
  },
  scroll: {
    alignSelf: 'stretch'
  },
});
