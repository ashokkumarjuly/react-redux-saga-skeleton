/*
 *
 * AlertFlashMessage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE
} from './constants';

const initialState = fromJS({

});

function alertFlashMessageReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        action.message
      ];

    case DELETE_FLASH_MESSAGE:
      return state.filter(e => e.id !== action.id);

    default: return state;
  }
}

export default alertFlashMessageReducer;
