# Movie Poster Color Scheme Frontend
> Get the color palette of your favorite Movie posters



## General info
This is the frontend of my React Native phone app that allows the users to take any poster image and find out the color palette of said image. This works by using the image palette render gem miro and image processor gem MiniMagick. I used [The Movie DB's](https://www.themoviedb.org/) api to gather all the film data.

## Intro Video
[Movie Poster Color Palette on YouTube](https://www.youtube.com/watch?v=vNw2kApGYRk)

## Technologies
* React Native
* React Native Elements
* Expo


## Setup
To run this project, first, install it locally by typing the following in the terminal:
```
git clone https://github.com/bigdumbbaby/film-frontend
```
Then CD into the repository and run the following:
```
npm install
```
Then run the app with: 
```
npm start
```


## Code Examples
```
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
    width: 35,
    height: 35,
    borderRadius: 100 / 2,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 2,
    padding: 10
  },
});
```
```
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
```



## Features
* Dynamically Search for Films
* Filter by Upcoming, Now Playing, and Top Rated
* Produce color palette of a poster
* Access information about a film; including title, overview, rating, and release date 
* Upload your own photos and get their color palette


To-do list:
* Refactor code
* Allow the user to upload/take photos straight from their phone
* Cloud host all photos uploaded by the user 
* Implement Auth so a user can sign in and access their own photos


## Status
Project functions as intended, more room for improvement 


## Inspiration
The vibrant color schemes film makers implement to garner feelings from the viewer


## Contact
Created by [Colton O'Connor](https://www.linkedin.com/in/colton-o-connor/)