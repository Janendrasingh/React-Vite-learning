const redux = require("redux");

const initialState = {
  counter: 0,
};

const reducer = (store = initialState, action) => {
  let newStore = store;
  if(action.type === "INCREMENT") {
      newStore = { ...store, counter: store.counter + 1 };
  }
  else if(action.type === "DECREMENT") {
      newStore = { ...store, counter: store.counter - 1 };
  }
  else if(action.type === "ADDITION") {
      newStore = { ...store, counter: store.counter + action.payload };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log("State updated:", state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: 5 }); // This action will not change the state since it's not handled in the reducer    
