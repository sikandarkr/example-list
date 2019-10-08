import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, rootSaga } from "./store";
import { logger } from "redux-logger";
export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
