import MainWrap from "../components/MainWrap"
import SearchBar from "../components/SearchBar"

const HomeContent: React.FC = () => {
  return (
    <div>
      <h1>Vagarish</h1>
      <h2>Kleros Search Engine</h2>
      <SearchBar />
      <p>Case and space sensitive. Graphic design is my passion.</p>
      <p>Current issues I see with this:</p>
      <ul>
        <li>
          pdfs are sometimes not parsed properly, or throw errors and are simply
          ignored
        </li>
        <li>this page is ugly. cannot fix that yet.</li>
      </ul>
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
