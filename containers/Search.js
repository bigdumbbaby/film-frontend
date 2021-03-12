import React from 'react'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard'
import FilmSpec from '../components/FilmSpec'
import NextPageFooter from '../components/NextPageFooter'

export default function Search({search}) {
  
  const [films, setFilms] = useState([])
  const [isSpec, setIsSpec] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/search?search_name=${search}&page_num=${pageNumber}`)
      .then(response => response.json())
      .then(filmData => {
        setTotalPages(filmData.total_pages)
        setFilms(filmData.results)
      })
  }, [search, pageNumber])

  function handlePress(){
    setIsSpec(!isSpec)
  }

  return (
    <View>
      {!isSpec
          ? <View> 
              {films.map(film => <FilmCard 
                film={film} 
                key={film.id} 
                handlePress={handlePress}
                setSelectedFilm={setSelectedFilm}
              />)}
              <NextPageFooter pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages}/>
            </View>
          : <FilmSpec 
            handlePress={handlePress}
            selectedFilm={selectedFilm}
            />
        }
    </View>
  )
}
