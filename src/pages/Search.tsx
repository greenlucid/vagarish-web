import { List, ListItem } from "@material-ui/core"
import MainWrap from "../components/MainWrap"
import SearchBar from "../components/SearchBar"
import useSearch from "../hooks/useSearch"
import { SearchResult } from "../types"
import { useURLQuery } from "../utils"

const SearchResultItem: React.FC<{ searchResult: SearchResult }> = ({
  searchResult,
}) => {
  // just testing rn.
  return <div>{JSON.stringify(searchResult)}</div>
}

const SearchResultsList: React.FC<{ searchResults: SearchResult[] }> = ({
  searchResults,
}) => {
  if (searchResults.length === 0) return <div>No results!</div>
  return (
    <List>
      {searchResults.map((searchResult) => (
        <ListItem key={searchResult.id}>
          <SearchResultItem searchResult={searchResult} />
        </ListItem>
      ))}
    </List>
  )
}

const APISearchContainer: React.FC<{ substring: string }> = ({ substring }) => {
  const searchResults = useSearch(substring)
  if (searchResults === undefined) return null
  if (searchResults === null) return <div>There was an issue</div>

  return <SearchResultsList searchResults={searchResults} />
}

const QueryContainer: React.FC<{
  substring: string | undefined | null
}> = ({ substring }) => {
  // nulls if query is incorrect
  if (!substring) return null

  return <APISearchContainer substring={substring} />
}

const SearchContainer: React.FC = () => {
  const query = useURLQuery()

  return (
    <>
      <SearchBar />
      <QueryContainer substring={query.get("substring")} />
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
