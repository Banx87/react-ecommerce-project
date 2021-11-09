import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Done so that middlewares only are in development mode.
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
