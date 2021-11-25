import { gql } from "@apollo/client"

const SEARCH = gql`
  query Search($substring: String, $klerosLiquidId: Int, $by: String, $courtId: Int) {
    search(
      options: { substring: $substring, klerosLiquidId: $klerosLiquidId, by: $by, courtId: $courtId }
    ) {
      id
      klerosLiquidId
      arbitrable
      courtId
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
