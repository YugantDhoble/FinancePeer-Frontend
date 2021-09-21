import {KEY} from './key.js'; 
export const saveLocalStorage = VAL => {
    window.localStorage.setItem(KEY, VAL);
  }

export const getLocalStorage = () => {
   return window.localStorage.getItem(KEY);
}

export const deleteLocalStorage = () => {
  window.localStorage.removeItem(KEY);
}