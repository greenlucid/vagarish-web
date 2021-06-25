import {
  TextField,
  InputBaseComponentProps,
  makeStyles,
} from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Form, Formik } from "formik"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  bigSearchBar: {
    input: {
      fontSize: "20",
    },
  },
  regularSearchBar: {},
})

const getChosenStyle = (
  classes: ClassNameMap<"bigSearchBar" | "regularSearchBar">,
  big?: boolean
) => {
  if (big)
    return {
      class: classes.bigSearchBar,
      inputProps: { min: 0, style: { textAlign: "center" } },
      InputProps: { style: { fontSize: 40 } },
    }
  else
    return {
      class: classes.regularSearchBar,
      inputProps: undefined,
      InputProps: undefined,
    }
}

const SearchBar: React.FC<{ big?: boolean }> = ({ big }) => {
  const history = useHistory()
  const classes = useStyles()

  const chosenStyle = getChosenStyle(classes, big)

  const changeUrl = (substring: string) => {
    let search = ""
    if (parseInt(substring) > 0) {
      search = `?id=${substring}`
    } else {
      search = `?substring=${substring}`
    }
    history.push({ pathname: "/search", search })
  }

  return (
    <Formik
      initialValues={{ substring: "" }}
      onSubmit={({ substring }) => changeUrl(substring)}
    >
      {({ handleChange, values }) => {
        return (
          <Form>
            <TextField
              inputProps={
                chosenStyle.inputProps as InputBaseComponentProps | undefined
              }
              InputProps={
                chosenStyle.InputProps as undefined /*its not really undefined lol*/
              }
              className={chosenStyle.class}
              name="substring"
              value={values.substring}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Search"
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SearchBar
