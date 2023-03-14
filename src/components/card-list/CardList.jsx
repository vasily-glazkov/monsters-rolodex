import "./card-list.css";
import Card from "../card/Card";

function CardList({ filteredMonsters }) {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card key={monster.id} {...monster} />;
      })}
    </div>
  );
}
export default CardList;
