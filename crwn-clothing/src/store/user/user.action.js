import { USER_ACTION_TYPES } from './user.types';
import {createAction} from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) => {
    //dispatch: accepts an object that represents the type of action we want to execute when it is called
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}