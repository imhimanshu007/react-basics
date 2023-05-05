import { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };

    console.log("app constructor");
  }

  componentDidMount() {
    console.log("app componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  onSearchChange = (event) => {
    //console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString: searchString };
    });
  };

  render() {
    console.log("app render");

    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monster"
        />
        <CardList filteredList={filteredMonsters} />
      </div>
    );
  }
}

export default App;
