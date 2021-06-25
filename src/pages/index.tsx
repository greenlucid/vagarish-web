import Typography from "@material-ui/core/Typography"
import MainWrap from "../components/MainWrap"
import SearchBar from "../components/SearchBar"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  homePage: {
    alignContent: "center",
    width: "90%",
    margin: "auto",
    textAlign: "center",
  },
  homeSearchBox: {
    marginTop: "10px",
  },
})

const HomeContent: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.homePage}>
      <Typography variant="h1">vagarish</Typography>
      <Typography variant="h6" color="textSecondary">
        Search Engine for Kleros
      </Typography>
      <Box className={classes.homeSearchBox}>
        <SearchBar big />
      </Box>
    </Box>
  )
}

const HomePage: React.FC = () => {
  return (
    <MainWrap>
      <HomeContent />
    </MainWrap>
  )
}

export default HomePage
