import { INCREMENT_NEGATIVE, INCREMENT_POSITIVE } from './actionsTypes';

export const incrementPositive = (number = 1, nextImage) => {
  return (dispatch, getState) => {
    nextImage().then(() => {
      dispatch({
        type: INCREMENT_POSITIVE,
        payload: number
      })
    });
  }
};

export const incrementNegative = (number = 1, nextImage) => {
  return (dispatch, getState) => {
    nextImage().then(() => {
      dispatch({
        type: INCREMENT_NEGATIVE,
        payload: number
      })
    });
  }
};