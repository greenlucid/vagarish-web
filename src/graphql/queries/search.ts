import { gql } from "@apollo/client"

const SEARCH = gql`
  query Search($substring: String, $klerosLiquidId: Int, $by: String) {
    search(
      options: { substring: $substring, klerosLiquidId: $klerosLiquidId, by: $by }
    ) {
      id
      klerosLiquidId
      arbitrable
      matchedEvidence {
        id
        textContent
        hasFile
        fileTextContent
        createdIn
        fileIpfsPath
        byAddress
        timestamp
      }
    }
  }
`

export default SEARCH
