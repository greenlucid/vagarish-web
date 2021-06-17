import { gql } from "@apollo/client"

const SEARCH = gql`
  query Search($substring: String!) {
    search(options: { substring: $substring }) {
      id
      klerosLiquidId
      arbitrable
      matchedEvidence {
        id
        textContent
        hasFile
        fileTextContent
        createdIn
      }
    }
  }
`

export default SEARCH
