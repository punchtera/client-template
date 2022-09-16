import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { browserHistory } from "./History";

export default function routerReducer() {
  return createRouterReducer(browserHistory);
}
