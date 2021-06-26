import { makeStyles, Typography, Box } from "@material-ui/core"
import MainWrap from "../components/MainWrap"
import ResultCard from "../components/ResultCard"
import SearchBar from "../components/SearchBar"
import useSearch from "../hooks/useSearch"
import { SearchResult } from "../types"
import { useURLQuery } from "../utils"
import Masonry from "react-masonry-css"

const useStyle = makeStyles({
  searchResultsBox: {
    paddingTop: "30px",
    paddingLeft: "40px",
    paddingRight: "70px",
  },
  singleResultBox: {
    paddingTop: "30px",
    paddingLeft: "40px",
    paddingRight: "70px",
  },
})

const SearchResultsList: React.FC<{ searchResults: SearchResult[] }> = ({
  searchResults,
}) => {
  const classes = useStyle()
  if (searchResults.length === 0)
    return (
      <Typography variant="h5" color="textSecondary">
        No results!
      </Typography>
    )
  if (searchResults.length === 1) {
    return (
      <Box className={classes.singleResultBox}>
        <ResultCard searchResult={searchResults[0]} showFull />
      </Box>
    )
  }
  return (
    <Box className={classes.searchResultsBox}>
      <Masonry
        breakpointCols={{ default: 3, 1600: 2, 800: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {searchResults.map((searchResult) => (
          <ResultCard
            key={searchResult.id}
            searchResult={searchResult}
            showFull={false}
          />
        ))}
      </Masonry>
    </Box>
  )
}

const APISearchContainer: React.FC<{
  substring: string | null
  id: string | null
}> = ({ substring, id }) => {
  const givenId = id ? parseInt(id) : null
  const searchResults = useSearch(substring, givenId)
  if (searchResults === undefined) return null
  if (searchResults === null) return <div>There was an issue</div>

  return <SearchResultsList searchResults={searchResults} />
}

const QueryContainer: React.FC<{
  substring: string | null
  id: string | null
}> = ({ substring, id }) => {
  // nulls if query is incorrect
  if (!substring && !id) return null

  return <APISearchContainer substring={substring} id={id} />
}

const SearchContainer: React.FC = () => {
  const query = useURLQuery()

  return (
    <>
      <SearchBar />
      <QueryContainer substring={query.get("substring")} id={query.get("id")} />
    </>
  )
}

const SearchPage: React.FC = () => {
  return (
    <MainWrap>
      <SearchContainer />
    </MainWrap>
  )
}

export default SearchPage
