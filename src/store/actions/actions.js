import { INCREMENT_NEGATIVE, INCREMENT_POSITIVE } from './actionsTypes';

export const incrementPositiveAction = (number = 1, nextImage) => {
  return (dispatch, getState) => {
    nextImage().then(() => {
      dispatch({
        type: INCREMENT_POSITIVE,
        payload: number
      })
    });
  }
};

export const incrementNegativeAction = (number = 1, nextImage) => {
  return (dispatch, getState) => {
    nextImage().then(() => {
      dispatch({
        type: INCREMENT_NEGATIVE,
        payload: number
      })
    });
  }
};

export const incrementAction = (number = 1, nextImage, type) => {
  return (dispatch, getState) => {
    nextImage().then(() => {
      dispatch({
        type: type,
        payload: number
      })
    });
  }
}