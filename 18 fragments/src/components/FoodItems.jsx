import Item from "./Items";

const foodItems = ["Dal", "Roti", "Rice", "Salad"];

const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} FoodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;