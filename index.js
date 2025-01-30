const redux = require("redux");

const initialState = {
  counter: 0,
};

const ourFirstReducer = (state = initialState, action) => {
  // reducer function always takes two arguments, existing state and action; and returns new state. Reducer function is pure function.

  // return new state based on action
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  // return existing state
  return state;
};

// We could have only one store in our application. We can have multiple reducers but only one store.
const ourBasicStore = redux.createStore(ourFirstReducer);

// storeSubscriber is a function that will be called whenever the state is updated. In a real world application our component will "subscribe" to the store and the value in the UI will be updated whenever the state is updated.
const storeSubscriber = () => {
  const actualState = ourBasicStore.getState();

  console.log(actualState);
};

ourBasicStore.subscribe(storeSubscriber);

// dispatching actions
ourBasicStore.dispatch({ type: "INCREMENT" }); // action is an object with a type property. It is a convention to use uppercase for action type.
ourBasicStore.dispatch({ type: "INCREMENT" });
ourBasicStore.dispatch({ type: "INCREMENT" });

ourBasicStore.dispatch({ type: "BAD_ACTION" }); // this will not change the state because we have not defined any action for BAD_ACTION type.
ourBasicStore.dispatch({ type: "BAD_ACTION" });
