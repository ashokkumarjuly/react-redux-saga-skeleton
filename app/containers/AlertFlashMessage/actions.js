import { v4 } from "node-uuid";

import {
  ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE,
} from './constants';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message: {
      id: v4(),
      ...message
    }
  };
}
export const deleteFlashMessage = (id) => {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}
