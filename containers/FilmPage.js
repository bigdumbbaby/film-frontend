import React from 'react'
import { SafeAreaView, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main'
import Search from './Search'



export default function FilmPage() {

  const [search, setSearch] = useState("")


  function updateSearch(searchInput){
    setSearch(searchInput)
    console.log(search)
  }

  return (
    <SafeAreaProvider>
      <SearchBar 
        placeholder='search...'
        onChangeText={updateSearch}
        value={search}
        />
      {search === ""
        ? <Main />
        : <Search search={search}/>
      }
    </SafeAreaProvider>
  )
}
