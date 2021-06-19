import { Evidence, SearchResult } from "../types"

const MatchedEvidence: React.FC<{ matchedEvidence: Evidence; index: number }> =
  ({ matchedEvidence, index }) => {
    if (matchedEvidence.fileTextContent) {
      return (
        <div>
          <h3>{`Evidence #${index + 1}`}</h3>
          <p>
            <b>Content</b>
          </p>
          <p>{matchedEvidence.textContent}</p>
          <p>
            <b> ### File Content</b>
          </p>
          <p>{matchedEvidence.fileTextContent}</p>
        </div>
      )
    }

    return (
      <div>
        <h3>{`Evidence #${index + 1}`}</h3>
        <p>
          <b>Content</b>
        </p>
        <p>{matchedEvidence.textContent}</p>
      </div>
    )
  }

const ResultCard: React.FC<{ searchResult: SearchResult }> = ({
  searchResult,
}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <a href={`https://court.kleros.io/cases/${searchResult.klerosLiquidId}`}>
        <h2>{`id: ${searchResult.klerosLiquidId}`}</h2>
      </a>
      <div>
        {searchResult.matchedEvidence.map((matchedEvidence, index) => (
          <MatchedEvidence
            key={matchedEvidence.id}
            matchedEvidence={matchedEvidence}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ResultCard
