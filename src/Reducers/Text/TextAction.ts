import { HELLO_CHANGE } from "./TextActionTypes";

/**
 * Action to change hello.
 */
export interface IChangeHello {
  type: typeof HELLO_CHANGE;
}

export type TextActions = IChangeHello;
