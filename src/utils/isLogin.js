import {getLocalStorage} from './localStorage';
export const isLogin = () => {
    const isLoggedIn = getLocalStorage();
    return (isLoggedIn !== null);
}