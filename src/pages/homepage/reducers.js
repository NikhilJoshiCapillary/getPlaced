import * as types from "./constant";
import { fromJS } from "immutable";
import { applyJob } from "../../api";

export const initialState = fromJS({
  allJobs: [],
});

function global(state = initialState, action) {
  switch (action.type) {
    case types.APPLY:
      console.log("Inside reducer");
      return {
        state,
      };

    case types.APPLY_SUCCESS:
      return {
        state,
      };

    case types.APPLY_FAIL:
      return state;
    default:
      return state;
  }
}

export default global;
