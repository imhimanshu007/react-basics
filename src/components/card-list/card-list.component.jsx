// import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ filteredList }) => {
  return (
    <div className="card-list">
      {filteredList.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {

//     const { filteredList } = this.props;

//     return (
//       <div className="card-list">
//         {filteredList.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
