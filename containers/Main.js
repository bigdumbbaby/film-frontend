import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard'
import FilmSpec from '../components/FilmSpec'
import FilterButtons from '../components/FilterButtons'
import NextPageFooter from '../components/NextPageFooter'

export default function Main({ handleUploadClick } ) {

  const [films, setFilms] = useState([])
  const [isSpec, setIsSpec] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState({})
  const [filmFilter, setFilmFilter] = useState("upcoming")
  const [isShowFilter, setIsShowFilter] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(`https://film-backend.herokuapp.com/films?filter=${filmFilter}&page_num=${pageNumber}`)
      .then(response => response.json())
      .then(filmData => {
        setTotalPages(filmData.total_pages)
        setFilms(filmData.results)
      })
  }, [filmFilter, pageNumber])

  function handlePress(){
    setIsSpec(!isSpec)
    setIsShowFilter(!isShowFilter)
  }

  

  return (
    <View>
      {isShowFilter
        ? <FilterButtons 
        setFilmFilter={setFilmFilter} 
        setPageNumber={setPageNumber}
        handleUploadClick={handleUploadClick}/>
        :null
      }
      
      {!isSpec
        ? <View> 
          {films.map(film => <FilmCard 
            film={film} 
            key={film.id} 
            handlePress={handlePress}
            setSelectedFilm={setSelectedFilm}
          />)}
          <NextPageFooter 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber} 
          totalPages={totalPages}/>
        </View>
          : <FilmSpec 
            handlePress={handlePress}
            selectedFilm={selectedFilm}
            />
        }
    </View>
  )
}

const styles = StyleSheet.create({
  selectorButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
