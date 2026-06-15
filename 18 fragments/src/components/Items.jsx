import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      {props.FoodItem}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => console.log(`${props.FoodItem} being bought`)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;