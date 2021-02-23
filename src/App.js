import API from "./components/API";
import Footer from "./components/Footer";
import HeaderItem from "./components/HeaderItem";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <title> Some Task Tracker</title>
      <HeaderItem url="#projects" name="API Project"></HeaderItem>
      <SearchBar id="searchBar"></SearchBar>
      <API searchTerm="Jackie"></API>
      <Footer></Footer>
    </div>
  );
}

export default App;
