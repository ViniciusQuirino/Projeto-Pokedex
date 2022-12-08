import ListPokemons from "./components/ListPokemons/index"
import './app.css'
import Header from "./components/Headers/index"
import SeachPokemons from "./components/SearchPokemons"
import MyPokemons from "./components/MyPokemons/index"

function App() {


  return (
    <div className="App">
      <Header />
      <div className = "display">
        <SeachPokemons />
        <MyPokemons/>
        <ListPokemons />
      </div>
    </div>
  )
}

export default App
