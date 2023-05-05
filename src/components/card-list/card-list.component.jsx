import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    console.log("render from cardList");
    //console.log(this.props);
    const { filteredList } = this.props;
    //console.log(filtertedList);

    return (
      <div className="card-list">
        {filteredList.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
