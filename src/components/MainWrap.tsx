const Footer: React.FC = () => {
  return (
    <div>
      <a href="https://github.com/greenlucid/vagarish">
        GitHub repo. Report your issues and suggestions here.
      </a>
    </div>
  )
}

const MainWrap: React.FC = (props) => {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}

export default MainWrap
