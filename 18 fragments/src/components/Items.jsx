import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      {props.FoodItem}
    </li>
  );
};

export default Item;