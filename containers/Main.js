import React from 'react'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard'
import FilmSpec from '../components/FilmSpec'

export default function Main() {

  const [films, setFilms] = useState([])
  const [isSpec, setIsSpec] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState({})

  useEffect(() => {
    fetch("https://film-backend.herokuapp.com/films")
      .then(response => response.json())
      .then(filmData => setFilms(filmData.results))
  }, [])

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
