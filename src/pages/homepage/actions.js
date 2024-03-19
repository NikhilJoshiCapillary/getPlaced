import * as types from "./constant";

export const applyForJob = ({ payload }) => ({
  type: types.APPLY,
  payload,
});

export const applyForJobSuccess = () => ({
  type: types.APPLY_SUCCESS,
});

export const applyForJobFail = (error) => ({
  type: types.APPLY_FAIL,
  error,
});
