// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Done so that middlewares only are in development mode.
// const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = createStore(
  rootReducer,
  // applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
