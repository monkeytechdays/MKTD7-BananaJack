import * as userReducer from './user.reducer';
import * as currentRoomReducer from './currentroom.reducer';
import * as roomsReducer from './rooms.reducer';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers as any)({
    userReducer,
    currentRoomReducer,
    roomsReducer
});

export default rootReducer;