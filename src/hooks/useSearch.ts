import { useQuery } from "@apollo/client"
import SEARCH from "../graphql/queries/search"
import { SearchResult } from "../types"

const useSearch = (substring: string | null, id: number | null, by: string | null, courtId: number | null): SearchResult[] | null | undefined => {
  const searchQuery = useQuery<{ search: SearchResult[] }>(SEARCH, {
    variables: { substring, klerosLiquidId: id, by, courtId },
  })

  if (!searchQuery.called || searchQuery.loading) {
    return undefined
  }
  if (searchQuery.data && searchQuery.data.search) {
    return searchQuery.data.search
  } else {
    return null
  }
}

export default useSearch
