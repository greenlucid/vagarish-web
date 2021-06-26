import { Evidence, SearchResult } from "../types"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import LinkMui from "@material-ui/core/Link"
import { Link } from "react-router-dom"
import { Box, makeStyles } from "@material-ui/core"
import DescriptionIcon from "@material-ui/icons/Description"
import LinkIcon from "@material-ui/icons/Link"
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
  resultCard: {
    opacity: 0.85,
  },
  fileContentBox: {
    backgroundColor: "#F0F6CC",
  },
  textContentBox: {
    backgroundColor: "#E6E6FA",
  },
  evidenceHeading: {
    paddingTop: "2px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  resultLinksBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "10px",
  },
  evidenceListBox: {
    padding: "10px",
  },
  readPdfBox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F0F68C",
    textAlign: "center",
  },
  readPdfButton: {},
})

const EvidenceCount: React.FC<{ index: number }> = ({ index }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {`Evidence #${index + 1}`}
    </Typography>
  )
}

const ByAddress: React.FC<{ address: string }> = ({ address }) => {
  return (
    <LinkMui href={`https://etherscan.io/address/${address}`} target="_blank">
      <Typography variant="body2" color="textSecondary">
        {`by ${address}`}
      </Typography>
    </LinkMui>
  )
}

const EvidenceTextContent: React.FC<{
  textContent?: string
  showFull: boolean
}> = ({ textContent, showFull }) => {
  const classes = useStyles()
  if (!textContent) return null
  const shownText =
    textContent.length > 500 && !showFull
      ? `${textContent.substring(0, 500)}...`
      : textContent
  return (
    <Box className={classes.textContentBox}>
      <Typography variant="body1">{shownText}</Typography>
    </Box>
  )
}

const EvidenceFileContent: React.FC<{
  fileTextContent?: string
  fileIpfsPath?: string
  showFull: boolean
}> = ({ fileTextContent, showFull, fileIpfsPath }) => {
  const classes = useStyles()
  if (!fileTextContent) return null
  const shownText = showFull
    ? `${fileTextContent.substring(0, 1000)}...`
    : `${fileTextContent.substring(0, 500)}...`
  return (
    <Box className={classes.fileContentBox}>
      <Button
        component={LinkMui}
        href={`https://ipfs.kleros.io${fileIpfsPath}`}
        target="_blank"
        className={classes.readPdfBox}
        startIcon={<LinkIcon />}
        endIcon={<DescriptionIcon />}
      >
        <Typography variant="body1" color="textSecondary">
          PDF
        </Typography>
      </Button>
      <Typography variant="body2">{shownText}</Typography>
    </Box>
  )
}

const MatchedEvidence: React.FC<{
  matchedEvidence: Evidence
  index: number
  showFull: boolean
}> = ({ matchedEvidence, index, showFull }) => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.evidenceHeading}>
        <EvidenceCount index={index} />
        <ByAddress address={matchedEvidence.byAddress} />
        <Box />
      </Box>
      <EvidenceTextContent
        textContent={matchedEvidence.textContent}
        showFull={showFull}
      />
      <EvidenceFileContent
        fileTextContent={matchedEvidence.fileTextContent}
        showFull={showFull}
        fileIpfsPath={matchedEvidence.fileIpfsPath}
      />
    </div>
  )
}

const ResultLinks: React.FC<{ searchResult: SearchResult }> = ({
  searchResult,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.resultLinksBox}>
      <Typography variant="h4">
        <Link
          to={{
            pathname: "/search",
            search: `?id=${searchResult.klerosLiquidId}`,
          }}
        >
          {`#${searchResult.klerosLiquidId}`}
        </Link>
      </Typography>
      <Typography variant="h6">
        <a
          href={`https://court.kleros.io/cases/${searchResult.klerosLiquidId}`}
        >
          <img
            src="https://court.kleros.io/favicon.ico"
            style={{ maxHeight: 50 }}
          />
        </a>
      </Typography>
    </Box>
  )
}

const MAX_NON_FULL_EVIDENCE_ENTRIES = 5

const EvidenceList: React.FC<{
  searchResult: SearchResult
  showFull: boolean
}> = ({ searchResult, showFull }) => {
  const classes = useStyles()
  const remaining =
    searchResult.matchedEvidence.length - MAX_NON_FULL_EVIDENCE_ENTRIES
  if (
    searchResult.matchedEvidence.length <= MAX_NON_FULL_EVIDENCE_ENTRIES ||
    showFull
  ) {
    return (
      <Box className={classes.evidenceListBox}>
        {searchResult.matchedEvidence.map((matchedEvidence, index) => (
          <MatchedEvidence
            key={matchedEvidence.id}
            matchedEvidence={matchedEvidence}
            index={index}
            showFull={showFull}
          />
        ))}
      </Box>
    )
  } else {
    return (
      <Box className={classes.evidenceListBox}>
        {searchResult.matchedEvidence
          .slice(0, MAX_NON_FULL_EVIDENCE_ENTRIES)
          .map((matchedEvidence, index) => (
            <MatchedEvidence
              key={matchedEvidence.id}
              matchedEvidence={matchedEvidence}
              index={index}
              showFull={showFull}
            />
          ))}

        <Typography variant="h6">
          <Link
            to={{
              pathname: "/search",
              search: `?id=${searchResult.klerosLiquidId}`,
            }}
          >
            {`...and ${remaining} more results`}
          </Link>
        </Typography>
      </Box>
    )
  }
}

const ResultCard: React.FC<{ searchResult: SearchResult; showFull: boolean }> =
  ({ searchResult, showFull }) => {
    const classes = useStyles()
    return (
      <Card elevation={0} variant="outlined" className={classes.resultCard}>
        <div>
          <ResultLinks searchResult={searchResult} />
          <EvidenceList searchResult={searchResult} showFull={showFull} />
        </div>
      </Card>
    )
  }

export default ResultCard
