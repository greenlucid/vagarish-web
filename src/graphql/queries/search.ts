import { gql } from "@apollo/client"

const SEARCH = gql`
  query Search($substring: String, $klerosLiquidId: Int) {
    search(
      options: { substring: $substring, klerosLiquidId: $klerosLiquidId }
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
      }
    }
  }
`

export default SEARCH
