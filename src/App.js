import { useState, useEffect } from "react"; // react hooks
//import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("Monster Rolosdex");
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onTitleChange = (event) => {
    const searchTitleField = event.target.value.toLowerCase();
    setTitle(searchTitleField);
  };

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="Search Tite"
      />
      <CardList filteredList={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: "",
//     };

//     console.log("app constructor");
//   }

//   componentDidMount() {
//     console.log("app componentDidMount");

//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       )
//     );
//   }

//   onSearchChange = (event) => {
//     //console.log(event.target.value);
//     const searchString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchString: searchString };
//     });
//   };

//   render() {
//     console.log("app render");

//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monster"
//         />
//         <CardList filteredList={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
