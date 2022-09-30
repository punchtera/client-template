import { TEXT_HELLO_CHANGE } from "./TextActionTypes";

/**
 * Action to get repo owner.
 */
export interface IChangeHello {
  type: typeof TEXT_HELLO_CHANGE;
}

export type TextActions = IChangeHello;
