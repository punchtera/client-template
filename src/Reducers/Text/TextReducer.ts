import * as TextActionTypes from "./TextActionTypes";
import { TextActions } from "./TextAction";
import { ITextState } from "./ITextState";

/**
 * Initialize an empty text state.
 * @returns {ITextState} text state
 */
export const initialState: ITextState = {
  hello: "",
};

export default function textReducer(state: ITextState = initialState, action: TextActions): ITextState {
  switch (action.type) {
    case TextActionTypes.TEXT_HELLO_CHANGE: {
      return { ...state, hello: "world" };
    }
    default: {
      return state;
    }
  }
}
