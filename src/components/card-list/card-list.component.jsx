import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render from cardList");
    //console.log(this.props);
    const { filteredList } = this.props;
    //console.log(filtertedList);

    return (
      <div>
        {filteredList.map((ele) => (
          <h1 key={ele.id}>{ele.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
