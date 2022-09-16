import { ReduxRouterState } from "@lagunovsky/redux-react-router";
import { IAuthorsState } from "./Authors/IAuthorsState";

export interface IAppState {
  authors: IAuthorsState;
  router: ReduxRouterState;
}
