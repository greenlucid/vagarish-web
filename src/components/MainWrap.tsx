import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "97vh"
  },
  footer: {
    marginTop: "auto",
  },
})

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Typography variant="body1">
        <a href="https://github.com/greenlucid/vagarish">
          GitHub repo. Report your issues and suggestions here.
        </a>
      </Typography>
      <Box />
      <Typography variant="body1">
        <a href="https://github.com/greenlucid/vagarish-web">
          Instructions
        </a>
      </Typography>
    </Box>
  )
}

const MainWrap: React.FC = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {props.children}
      <Footer />
    </Box>
  )
}

export default MainWrap
