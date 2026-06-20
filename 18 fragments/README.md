# React Practice: Fragments, Map Method, Props, and CSS Modules

## 📌 Overview

This project was created while learning React fundamentals and focuses on four important concepts:

1. React Fragments
2. JavaScript Map Method
3. Props (Properties)
4. CSS Modules

The application displays a list of healthy food items, renders them dynamically using the `map()` method, passes data between components using props, and applies component-scoped styling using CSS Modules.

---

# 🚀 Concepts Practiced

## 1. React Fragments

Fragments allow multiple elements to be returned from a component without creating unnecessary DOM nodes.

### Without Fragment

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

### Using Fragment

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}
```

### Benefits

* Avoids unnecessary wrapper elements.
* Keeps the DOM clean.
* Improves readability.
* Useful when returning multiple JSX elements.

---

## 2. JavaScript Map Method

The `map()` method is commonly used in React to render lists dynamically.

### Example

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function App() {
  return (
    <>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </>
  );
}
```

### Benefits

* Reduces repetitive code.
* Makes UI scalable and dynamic.
* Useful when rendering API data.
* Supports component-based architecture.

---

## 3. Understanding Props

Props (Properties) are used to pass data from a parent component to child components.

### Parent Component (App.jsx)

```jsx
let foodItems = [
  "Sabji",
  "Vegetable",
  "Fruits",
  "Roti",
  "Milk",
  "Ghee"
];

<ErrorMessage items={foodItems} />
<FoodItems items={foodItems} />
```

### Receiving Props Using Destructuring

```jsx
const FoodItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item} FoodItem={item} />
      ))}
    </ul>
  );
};
```

### Receiving Props Using Props Object

```jsx
const Item = (props) => {
  return (
    <li>
      {props.FoodItem}
    </li>
  );
};
```

### What This Demonstrates

* Parent-to-child communication.
* Unidirectional data flow.
* Dynamic rendering using passed data.
* Reusable and maintainable components.
* Read-only nature of props.

### Data Flow

```text
App.jsx
   ↓
FoodItems.jsx
   ↓
Item.jsx
```

---

## 4. CSS Modules

CSS Modules provide locally scoped CSS for React components.

Unlike regular CSS files, styles defined inside a CSS Module only apply to the component that imports them.

### Why CSS Modules?

When working on large applications, different components may accidentally use the same CSS className names.

Example:

```css
.title {
  color: blue;
}
```

Another component may also contain:

```css
.title {
  color: red;
}
```

This can cause style conflicts.

CSS Modules solve this problem by generating unique className names automatically.

---

### Creating a CSS Module

#### Item.module.css

```css
.kgItem {
  background-color: rgb(45, 144, 220);
  color: white;
  border: 2px solid black;
  font-weight: 500;
}
```

---

### Importing CSS Module

#### Item.jsx

```jsx
import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={`${styles.kgItem} list-group-item`}>
      {props.FoodItem}
    </li>
  );
};

export default Item;
```

---

### How It Works

React transforms:

```jsx
styles.kgItem
```

into something like:

```html
kgItem_x8f3a_12
```

This unique className name prevents conflicts with styles from other components or libraries such as Bootstrap.

---

### Advantages of CSS Modules

* Component-scoped styling.
* Prevents className name collisions.
* Easier maintenance in large projects.
* Better code organization.
* Works seamlessly with React and Vite.

---

# 🛠️ Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* JSX
* Bootstrap
* CSS Modules

---

# 📂 Project Structure

```text
src/
│
├── components/
│   ├── FoodItems.jsx
│   ├── ErrorMessage.jsx
│   ├── Item.jsx
│   └── Item.module.css
│
├── App.jsx
├── App.css
├── main.jsx
│
└── assets/
```

---

# 📖 Learning Outcomes

Through this project, I learned:

* React Fragments and their benefits.
* Dynamic list rendering using `map()`.
* Passing data using Props.
* Component communication in React.
* Conditional rendering.
* Bootstrap integration.
* CSS Modules and scoped styling.
* Preventing CSS conflicts in large applications.
* Building reusable React components.

---

# ▶️ Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 🎯 Future Improvements

* Add search functionality.
* Add category filtering.
* Use React State (`useState`).
* Fetch data from APIs.
* Add item selection and highlighting.
* Learn event handling and state management.

---

# 📄 License

This project was created for educational and practice purposes while learning React fundamentals and modern component-based UI development.
