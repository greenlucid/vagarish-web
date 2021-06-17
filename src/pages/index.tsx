import MainWrap from "../components/MainWrap"
import SearchBar from "../components/SearchBar"

const HomeContent: React.FC = () => {
  return (
    <div>
      <h1>Vagarish</h1>
      <h2>Kleros Search Engine</h2>
      <SearchBar />
    </div>
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
