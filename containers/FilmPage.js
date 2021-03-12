import React from 'react'
import { SafeAreaView, TextInput, View} from 'react-native'
import { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main'
import Search from './Search'
import Camera from './Camera'



export default function FilmPage({ handleUploadClick }) {

  const [search, setSearch] = useState("")


  function updateSearch(searchInput){
    setSearch(searchInput)
  }

  return (
    <SafeAreaProvider>
      <SearchBar 
        placeholder='search...'
        onChangeText={updateSearch}
        value={search}
        />
      {search === ""
        ? <Main handleUploadClick={handleUploadClick}/>
        : <Search search={search}/>
      }
    </SafeAreaProvider>
  )
}
