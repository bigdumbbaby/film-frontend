import React from 'react'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard'
import FilmSpec from '../components/FilmSpec'

export default function Search({search}) {
  
  const [films, setFilms] = useState([])
  const [isSpec, setIsSpec] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState({})

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/search?search_name=${search}`)
      .then(response => response.json())
      .then(filmData => {
        setFilms(filmData.results)
      })
  }, [search])

  function handlePress(){
    setIsSpec(!isSpec)
  }

  return (
    <View>
      {!isSpec
          ? films.map(film => <FilmCard 
            film={film} 
            key={film.id} 
            handlePress={handlePress}
            setSelectedFilm={setSelectedFilm} /
            >)
          : <FilmSpec 
            handlePress={handlePress}
            selectedFilm={selectedFilm}
            />
        }
    </View>
  )
}
