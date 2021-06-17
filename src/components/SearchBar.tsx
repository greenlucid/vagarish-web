import { Button, Input } from "@material-ui/core"
import { Form, Formik } from "formik"
import { useHistory } from "react-router-dom"

const SearchBar: React.FC = () => {
  const history = useHistory()

  const changeUrl = (substring: string) => {
    const search = `?substring=${substring}`
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
            <Input
              name="substring"
              value={values.substring}
              onChange={handleChange}
            />
            <Button type="submit">Search 🔎</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SearchBar
